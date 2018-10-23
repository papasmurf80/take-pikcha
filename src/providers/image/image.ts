import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';

class Photo {
  data: any;
}


/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {
  public photos: Photo[] = [];

  constructor(private camera: Camera, private storage: Storage) 
    {console.log('Hello ImageProvider Provider');
    }

    loadSaved() {
      this.storage.get('photos').then((photos) => {
        this.photos = photos || [];
      });
    }
    cleanSlate(){
      this.storage.clear().then( _ => {
        console.log('all clear')
      }
      )
    }
  
    public takePicture() {
      console.log('wtf')
      // Create options for the Camera Dialog
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
      
      this.camera.getPicture(options).then((imageData) => {
        //Add new photo to gallery
        this.photos.unshift({
          data: 'data:image/jpeg;base64,' + imageData 
        });
       
       //View photos later
       this.storage.set('photos', this.photos);
      }, (err) => {
        // Handle error
        console.log('Camera issue:' + err)
       });
  
    }
  }    
