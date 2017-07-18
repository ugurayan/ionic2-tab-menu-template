import {Component, ViewChild} from '@angular/core';
import {LoadingController, MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {Root1Page} from '../pages/root1/root1';
import {Root2Page} from '../pages/root2/root2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = Root1Page;

  constructor(public loadingCtrl: LoadingController,
              public menuCtrl: MenuController,
              platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  changeRoot(type) {
    if(type === 'Root1') {
      console.log(1);
      //noinspection JSIgnoredPromiseFromCall
      this.nav.setRoot(Root1Page);
    } else {
      console.log(2);
      //noinspection JSIgnoredPromiseFromCall
      this.nav.setRoot(Root2Page);
    }

    this.presentLoading();
    //noinspection JSIgnoredPromiseFromCall
    this.menuCtrl.close();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000
    });
    loader.present();
  }
}
