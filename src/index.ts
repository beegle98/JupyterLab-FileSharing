import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { showDialog, Dialog, InputDialog } from '@jupyterlab/apputils';
import { buildIcon } from '@jupyterlab/ui-components';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'context-menu',
  autoStart: true,
  requires: [IFileBrowserFactory],
  
  activate: (app: JupyterFrontEnd, factory: IFileBrowserFactory) => {
    app.commands.addCommand('FileSharing/context-menu:open', {          
      label: 'Share file',
      caption: "context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {

        console.log("Click the 'share file' button");
        const widget = factory.tracker.currentWidget;
        const file = widget.selectedItems().next();
        
        let input_url : string;
        
        InputDialog.getText({
          title : 'Please enter the URL',
          
        }).then(result =>{
          if(result.button.accept){
            input_url = result.value

            showDialog({
          
              title: 'Share file : ' + file.name, 
              body: 'Share file with professor : '+ file.path,
              buttons: [
                Dialog.okButton({label : 'Share'}),
                Dialog.cancelButton()
              ],
              
            }).then(result => {
              if(result.button.accept){

                console.log( "URL : " + input_url +"\n"+ "Shared the file :" + file.name );


                fetch('http://localhost:3000/uploadURL',{
                  method : 'post',
                  headers : {'Content-Type' : 'application/json'},                 
                  body : JSON.stringify({
                    fileName : file.name,
                    url : input_url
                  })
                }).then(res => res.json())
                .then(res => console.log(res))

                
                let uploadFile = new FormData();

                console.log('http://localhost:8888/lab/tree/' + file.path);
                fetch('http://localhost:8888/files/' + file.path +'?_xsrf=2%7C6cc81390%7C5bb85f06295e2c5df9b85c1ac96ce502%7C1635325547')
                .then(res => res.blob())
                .then(function(myblob){
                  console.log("Size: " + myblob.size);
                  console.log("type: \n" + myblob.type);
                  uploadFile.append('File',myblob, file.name);
                  
                fetch('http://localhost:3000/uploadFile',{
                  method : 'post',
                  headers : {},
                  body : uploadFile
    
                }).then(res => res.json())
                .then(res => console.log(res))
                .catch(e => console.log(e))
                });

              }
            }).catch((e) => console.log(e));
          }
        })
      },

    });
    
  },
};

export default extension;
