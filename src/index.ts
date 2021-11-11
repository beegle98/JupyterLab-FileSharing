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
      
     
      /*id select 필요없을 예정
        const options = ['one', 'two', 'three']
        InputDialog.getItem({
          title : 'example',
          items : options,
          current : Math.max(0, options.indexOf('one')),

        }).then((result) => {
          // If the user click on the accept button of the dialog
          if (result.button.accept) {
            console.log(result.value);            
            
          }
        })*/
        /*
            fetch('url',{
              method : 'post',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify({
                // JSON 형식으로 데이터를 전송
              })
            }).then(res => res.json())
          */
      
      
      label: 'Share file',
      caption: "context menu button for file browser's items.",
      icon: buildIcon,
      execute: () => {

        console.log("Click the 'share file' button");
        const widget = factory.tracker.currentWidget;
        const file = widget.selectedItems().next();
        
        console.log('file: ' + file.path);

        
        var input_url : any;

        InputDialog.getText({
          title : 'Please enter the URL',
          
        }).then(result =>{
          if(result.button.accept){
            input_url = result.value
            console.log("inputURL : " + input_url);

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
                let send_file = new FormData();
                
                
                send_file.append('file',
                new Blob([file.mimetype], {type: 'multipart/form-data'})
                ,file.name);
                send_file.append('url',
                new Blob([JSON.stringify({"url": input_url})], { type: 'application/json' })
                );

                
                fetch('http://localhost:3000/file/upload',{
                  method : 'post',
                  headers : {'Content-Type': 'application/x-www-form-urlencoded'},
                  body : send_file
    
                }).then(res => res.json())
                .then(res => console.log(res))
                .catch(e => console.log(e))
              }
            }).catch((e) => console.log(e));
          }
        })
      },

    });
    
  },
};

export default extension;
