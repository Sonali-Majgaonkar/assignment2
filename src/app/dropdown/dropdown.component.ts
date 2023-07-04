import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  onSubmit(myForm: NgForm) {
    alert('Successfully Submit Form..');
    myForm.reset();
  }
}
