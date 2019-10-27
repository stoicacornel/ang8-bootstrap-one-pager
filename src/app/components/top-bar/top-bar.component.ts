import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor() { }

  hamburgerToggle() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
  }
}
