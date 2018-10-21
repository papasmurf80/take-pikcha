import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
 
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
 
declare var cordova: any;
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  lastImage: string = null;
  loading: Loading;
 
  constructor(public navCtrl: NavController, 
      private camera: Camera, 
      private transfer: Transfer, 
      private file: File, 
      private filePath: FilePath, 
      public actionSheetCtrl: ActionSheetController, 
      public toastCtrl: ToastController, 
      public platform: Platform, 
      public loadingCtrl: LoadingController
    ) { }
 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // sourceType: sourceType,
      saveToPhotoAlbum: true,
      // correctOrientation: true
    };
   
    // Get the data of an image
    // this.camera.getPicture(options).then((imagePath) => {
    //   // Special handling for Android library
    //   if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    //     this.filePath.resolveNativePath(imagePath)
    //       .then(filePath => {
    //         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
    //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //         console.log(correctPath, currentName)
    //       });
    //   } else {
    //     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    //     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //     console.log(correctPath, currentName)
    //   }
    // }, (err) => {
    //   this.presentToast('Error while selecting image.');
    // });

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
     }, (err) => {
      // Handle error
     });
  }
  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
  
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
  
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
}
