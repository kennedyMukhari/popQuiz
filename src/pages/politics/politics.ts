import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DisplayPage } from '../display/display';
/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {

  @ViewChild('slides') slides: Slides;


  score: any;
  sanction: any;
  cut: any;
  party: any;
  pres: any;
  zim: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sanction = 0;
    this.cut = 0;
    this.party = 0;
    this.pres = 0;
    this.zim = 0;
  }
  sanctionClicked() {
    return this.sanction = 20;
  }
  cutClicked() {
    return this.cut = 20;
  }
  partyClicked() {
    return this.party = 20;
  }
  presClicked() {
    return this.pres = 20;
  }
  zimClickec() {
    return this.zim = 20;
  }
  submit() {
    this.score = this.sanction + this.cut + this.party + this.pres + this.zim;
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticsPage');
  }

  goToDisplay() {
    this.score = this.score;
    this.navCtrl.push(DisplayPage, {
      move: this.score
    });
  }

}
