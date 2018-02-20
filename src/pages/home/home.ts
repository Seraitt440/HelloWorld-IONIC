import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items = ['XAMPP', 
			 'WAMP', 
			 'Node Version Manager', 
			 'Git', 
			 'Sublime', 
			 'VS Code Text Editor'];

	itemSelected(item: string) {
		console.log("Selected Item", item);
	}
  constructor(public navCtrl: NavController) {
  }
}
