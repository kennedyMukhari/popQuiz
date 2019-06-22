import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DisplayPage } from '../display/display';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  @ViewChild('slides') slides: Slides;

  a: any;
  d: any;
  c: any;
  b: any;
  e: any;
  score: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.a = 0;
    this.d = 0;
    this.c = 0;
    this.b = 0;
    this.e = 0;
    this.score = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

  aClicked() {
    this.a = 20;
  }
  dCliked() {
    this.d = 20;
  }
  cCLicked() {
    this.c = 20;
  }
  bClicked() {
    this.b = 20;
  }
  eClicked() {
    this.e = 20;
  }
  submit() {
    this.score = this.a + this.d + this.c + this.b + this.e;
  }
  next() {
    this.slides.slideNext();
  }
  goToDisplay() {
    this.score = this.score;
    this.navCtrl.push(DisplayPage, {
      move: this.score
    });
  }
}
