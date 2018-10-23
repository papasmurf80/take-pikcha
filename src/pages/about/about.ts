import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
import { ImageProvider } from '../../providers/image/image';
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   
  constructor(public navCtrl: NavController, 
      public imageService: ImageProvider, 
  ) {
   }
  
  ngOnInit() {
    this.imageService.loadSaved();
  }
  
  onTakePicture(){
    console.log('on take')
    this.imageService.takePicture()
  }  

}
