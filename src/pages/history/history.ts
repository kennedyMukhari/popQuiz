import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Thumbnail } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DisplayPage } from '../display/display';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  @ViewChild('slides') slides: Slides;

  mandela: any;
  deKlerk: any;
  arrested: any;
  prison: any;
  robbenIsland: any;
  score: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mandela = 0;
    this.deKlerk = 0;
    this.score = 0;
    this.arrested = 0;
    this.prison = 0;
    this.robbenIsland = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  madelaClicked() {
    return this.mandela = 20;
  }
  deKlerkClicked() {
    return this.deKlerk = 20;
  }
  arrested1962() {
    return this.arrested = 20;
  }
  prisonClicked() {
    return this.prison = 20;
  }
  imprisoned() {
    return this.robbenIsland = 20;
  }
  submit() {
    this.score = (this.mandela + this.deKlerk + this.arrested + this.prison + this.robbenIsland);
  }

  next() {
    this.slides.slideNext();
  }
  prev() {
    this.slides.slidePrev();
  }
  
  goToDisplay() {
    this.score = this.score;
    this.navCtrl.push(DisplayPage,{
      move:this.score,
    });
  }
}
