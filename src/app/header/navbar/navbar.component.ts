import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() brandName;

  title;

  constructor() { }

  ngOnInit() {
    this.title = this.brandName;
  }

}
