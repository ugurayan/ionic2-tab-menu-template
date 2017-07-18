import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-root1',
  templateUrl: 'root1.html',
})
export class Root1Page {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Root1Page');
  }

}
