import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public leftMenu: any;
  @Output() closeevent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router
  ) {
    this.leftMenu = {
      closed: false
    };
  }

  ngOnInit() {
  }

  goPage(page) {
  	this.router.navigate([page]);
  }

  toggleMenu() {
    this.leftMenu.closed = !this.leftMenu.closed;
    this.closeevent.next(this.leftMenu.closed);
  }

}
