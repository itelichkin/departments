import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  title: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Click to Department and you will find Employee';
  }

}
