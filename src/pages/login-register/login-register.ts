import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { AppUserProvider } from '../../providers/app-user/app-user';


/**
 * Generated class for the LoginRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})


export class LoginRegisterPage {
user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public appUser:  AppUserProvider) {
  }

  
  login(user) {
    console.log("login");
  this.goHome();
  }

  goHome(){
    this.app.getRootNav().setRoot(TabsPage, {animate: true, direction: 'forward'});
  }

  onRegister(user) {
    console.log("register");
    this.appUser.register().subscribe(res => console.log(res), err =>{})
  }

}
