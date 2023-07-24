import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  constructor() { }

  ngOnInit(): void {
    this.activateCarousel();
  }

  activateCarousel(): void {
    $('#myCarousel').carousel();
  }
}
