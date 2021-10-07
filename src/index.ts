import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { showDialog, Dialog } from '@jupyterlab/apputils';
import { buildIcon } from '@jupyterlab/ui-components';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'context-menus',
  autoStart: true,
  requires: [IFileBrowserFactory],
  activate: (app: JupyterFrontEnd, factory: IFileBrowserFactory) => {
    app.commands.addCommand('context-menu:open', {
      label: 'Share files',
      caption: "Example context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {
        factory.tracker.currentWidget!.selectedItems
        const file = factory.tracker.currentWidget?.selectedItems().next();

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
        });
        
      },
    });
  },
};

export default extension;
