import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {
user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  
  login(user) {
    console.log("login");
  this.goHome();
  }

  goHome(){
    this.app.getRootNav().setRoot(TabsPage, {animate: true, direction: 'forward'});
  }
}
