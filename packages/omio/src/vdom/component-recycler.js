import Component from '../component'
import { getUse, getPath } from '../util'
import options from  '../options'
/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
const components = {}

/** Reclaim a component for later re-use by the recycler. */
export function collectComponent(component) {
  let name = component.constructor.name
  ;(components[name] || (components[name] = [])).push(component)
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
export function createComponent(Ctor, props, context, vnode) {
  let list = components[Ctor.name],
    inst

  if (Ctor.prototype && Ctor.prototype.render) {
    inst = new Ctor(props, context)
    Component.call(inst, props, context)
  } else {
    inst = new Component(props, context)
    inst.constructor = Ctor
    inst.render = doRender
  }
  vnode && (inst.scopedCssAttr = vnode.css)

  if (inst.store) {
		if(inst.use){
      const use = typeof inst.use === 'function' ? inst.use() : inst.use
      
      if(options.isMultiStore){
        let _updatePath = {}
				let using = {}
				for (let storeName in use) {
					_updatePath[storeName] = {}
					using[storeName] = {}
					getPath(use[storeName], _updatePath, storeName)
					getUse(inst.store[storeName].data, use[storeName], using, storeName)
					inst.store[storeName].instances.push(inst)
				}
				inst.using = using
				inst._updatePath = _updatePath
      }else{
        inst._updatePath = getPath(use)
        inst.using = getUse(inst.store.data, use)
        inst.store.instances.push(inst)
      }
    }
    
    if(inst.useSelf){
      const use = typeof inst.useSelf === 'function' ? inst.useSelf() : inst.useSelf
      
      if (options.isMultiStore) {
				let _updatePath = {}
				let using = {}
				for (let storeName in use) {
					getPath(use[storeName], _updatePath, storeName)
					getUse(inst.store[storeName].data, use[storeName], using, storeName)
					inst.store[storeName].updateSelfInstances.push(inst)
				}
				inst.usingSelf = using
				inst._updateSelfPath = _updatePath
			} else {
        inst._updateSelfPath = getPath(use)
        inst.usingSelf = getUse(inst.store.data, use)
        inst.store.updateSelfInstances.push(inst)
      }
    }


  }

  if (list) {
    for (let i = list.length; i--; ) {
      if (list[i].constructor === Ctor) {
        inst.nextBase = list[i].nextBase
        list.splice(i, 1)
        break
      }
    }
  }
  return inst
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, context) {
  return this.constructor(props, context)
}
