import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DisplayPage } from '../display/display';
/**
 * Generated class for the SoccerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soccer',
  templateUrl: 'soccer.html',
})
export class SoccerPage {

  @ViewChild('slides') slides: Slides;

  ballon: any;
  liverpool: any;
  ronaldo: any;
  real: any;
  puskas: any;
  score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ballon = 0;
    this.liverpool = 0;
    this.ronaldo = 0;
    this.real = 0;
    this.puskas = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerPage');
  }

  ballonClicked() {
    this.ballon = 20;
  }
  liverpoolClicked() {
    this.liverpool = 20;
  }
  ronaldoClicked() {
    this.ronaldo = 20;
  }
  realClicked() {
    this.real = 20;
  }
  puskasClicked() {
    this.puskas = 20;
  }

  submit() {
    this.score = this.ballon + this.liverpool + this.ronaldo + this.real + this.puskas;
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
      move:this.score
    });
  }
}
