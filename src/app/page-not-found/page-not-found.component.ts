import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      {{error}}
    </h1>
    <img [src] = "image" >
    <button style="background-color: #c5e6f5; margin-top:15px; margin-left:45%" mat-button matTooltip="Login" matTooltipPosition="after" matTooltipShowDelay="1200" matTooltipHideDelay="800">
      <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/></svg>
      <a routerLink="/" style="text-decoration:none; color:blue">Back to Login</a>
    </button>
  `,
  styles: ['h1{color: red; margin-left:42%; margin-top:10%}', 'img{display:block; margin:auto}']
})

export class PageNotFoundComponent implements OnInit {

  error = "404: Page Not Found";
  image = "assets/404 error.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
