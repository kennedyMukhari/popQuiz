import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { SciencePage } from '../science/science';
import { PoliticsPage } from '../politics/politics';
import { BusinessPage } from '../business/business';
import { SoccerPage } from '../soccer/soccer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToHistoryPage() {
    this.navCtrl.push(HistoryPage);
  }
  goToSciencePage() {
    this.navCtrl.push(SciencePage);
  }
  goToPoliticsPage() {
    this.navCtrl.push(PoliticsPage);
  }
  goToBusinessPage() {
    this.navCtrl.push(BusinessPage);
  }
  goToSoccerPage() {
    this.navCtrl.push(SoccerPage);
  }
}
