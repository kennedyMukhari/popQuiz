import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DisplayPage } from '../display/display';
/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {

  @ViewChild('slides') slides: Slides;

  score:any;
  company:any;
  ceo:any;
  country:any;
  invent:any;
  huawei:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.company = 0;
    this.ceo = 0;
    this.country = 0;
    this.invent = 0;
    this.huawei = 0;
  }

  companyClicked() {
    return this.company = 20;
  }
  ceoClicked() {
    return this.ceo = 20;
  }
  countryClicked() {
    return this.country = 20;
  }
  huaweiClicked() {
    return this.huawei = 20;
  }
  inventClicked() {
    return this.invent = 20 ;
  }
  submit() {
    this.score = this.company + this.ceo + this.country +this.invent + this.huawei;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SciencePage');
  }

  next() {
    this.slides.slideNext();
    }
    
    prev() {
    this.slides.slidePrev();
    }

    gotToDisplay() {
      this.score = this.score;
      this.navCtrl.push(DisplayPage,{
        move:this.score
      })
    }

}
