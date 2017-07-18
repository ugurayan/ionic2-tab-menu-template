import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SearchPage} from '../search/search';
import {HomePage} from '../home/home';

/**
 * Generated class for the Root2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-root2',
  templateUrl: 'root2.html',
})
export class Root2Page {
  tab1Root = HomePage;
  tab2Root = SearchPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Root2Page');
  }

}
