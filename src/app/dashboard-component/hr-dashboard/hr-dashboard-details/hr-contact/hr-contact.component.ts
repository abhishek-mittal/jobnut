import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hr-contact',
  templateUrl: './hr-contact.component.html',
  styleUrls: []
})
export class HrContactComponent implements OnInit {

 @Output()
discardClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {

  }

  discardClicked() {
    this.discardClick.emit(true);
  }

}

