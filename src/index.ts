import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { showDialog, Dialog } from '@jupyterlab/apputils';
import { buildIcon } from '@jupyterlab/ui-components';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'context-menu',
  autoStart: true,
  requires: [IFileBrowserFactory],
  activate: (app: JupyterFrontEnd, factory: IFileBrowserFactory) => {
    app.commands.addCommand('jlab-examples/context-menu:open', {
      label: 'Share file',
      caption: "Example context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {
        const file = factory.tracker.currentWidget.selectedItems().next();

        showDialog({
          title: 'Share file : ' + file.name, 
          body: 'Share file with professor',
          buttons: [Dialog.okButton()],
        }).catch((e) => console.log(e));
      },
    });
  },
};

export default extension;
