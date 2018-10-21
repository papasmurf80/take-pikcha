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
  user: any = {
    firstName: undefined, 
    lastName: undefined, 
    email: undefined, 
    password: undefined
  }

  logUser: any = {
    email: undefined,
    password: undefined
  }

    constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public appUser:  AppUserProvider) {
    }

    
    login(logUser) {
      console.log("login");
    this.goHome();
    }

    goHome(){
      this.app.getRootNav().setRoot(TabsPage, {animate: true, direction: 'forward'});
    }

    onRegister() {
      console.log("register");
      this.appUser.register(this.user)
        .subscribe( res => {
          
          console.log(res);
          this.goHome();
          }, 
          err =>{}
        );
    }

}
