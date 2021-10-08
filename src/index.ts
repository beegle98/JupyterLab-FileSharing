import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { showDialog, Dialog, InputDialog } from '@jupyterlab/apputils';
import { buildIcon } from '@jupyterlab/ui-components';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'context-menus',
  autoStart: true,
  requires: [IFileBrowserFactory],
  activate: (app: JupyterFrontEnd, factory: IFileBrowserFactory) => {
    app.commands.addCommand('context-menu:open', {
      label: 'Share files',
      caption: "context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {
        const file = factory.tracker.currentWidget?.selectedItems().next();
        const options = ['one', 'two', 'three']

        InputDialog.getText({
          title : 'example',

        }).then(result =>{
          if(result.button.accept){
            console.log(result.value);
          }
        })
        
        InputDialog.getItem({
          title : 'example',
          items : options,
          current : Math.max(0, options.indexOf('one')),

        }).then((result) => {
          // If the user click on the accept button of the dialog
          if (result.button.accept) {
            console.log(result.value);            
            
          }
        })
        showDialog({
          
          title: 'Share file : ' + file?.name, 
          body: 'Share file with professor : '+ file?.path,
          buttons: [
            Dialog.okButton({label : 'Share'}),
            Dialog.cancelButton()
          ],
          
        }).then(result => {
          if(result.button.accept){
            console.log(file?.name + " Share Success ");
          }
        }).catch((e) => console.log(e));
        
      },
    });
  },
};

export default extension;