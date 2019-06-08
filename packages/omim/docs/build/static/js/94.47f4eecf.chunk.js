webpackJsonp([94],{50:function(n,o){n.exports="## Dialog\r\n\r\nDialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-dialog cancel-button=\"{text: 'Cancel'}\" confirm-button=\"{text: 'Discard'}\">\r\n  <p class=\"m-dialog-alert-p\">Discard draft?</p>\r\n</m-dialog>\r\n```\r\n\r\n## Usage in Omi\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-dialog cancel-button={{text: 'Cancel'}} confirm-button={{text: 'Discard'}}>\r\n  <p style='margin:0'>Discard draft?</p>\r\n</m-dialog>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| show | boolean | -- | Whether to display a dialog box |\r\n| scrollable | boolean | -- | Dialog content overflow guarantees scrolling |\r\n| title | string | -- | Dialog title |\r\n| cancel-button | object | -- | Dialog box cancels button content, supports all m-icon attribute |\r\n| confirm-button | object | -- | Dialog to confirm button content, supports all m-icon attribute |\r\n| onOpening | function | -- | Dialog opening trigger |\r\n| onOpened | function | -- | Dialog opened trigger |\r\n| onClosing | function | -- | Dialog closing trigger |\r\n| onClosed | function | -- | Dialog closed trigger |\r\n| onScrim | function | -- | Click the black transparent area around the dialog box to trigger |\r\n| onCancel | function | -- | Click the dialog cancel button to trigger |\r\n| onConfirm | function | -- | Click the dialog confirm button to trigger |\r\n"}});
//# sourceMappingURL=94.47f4eecf.chunk.js.map