import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaggingTextComponent } from '../../components/tagging-text/tagging-text';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}
