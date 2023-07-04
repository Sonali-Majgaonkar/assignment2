import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @ViewChild('myForm') myForm : any;

  constructor(){}

  onSubmitFun() {
    alert('Successfully Submit Form..');
    this.myForm.reset();
  }
}
