import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  year!: HTMLElement|null;

  constructor() { }

  ngOnInit(): void {
    this.getYear();
  }

  getYear(){
    // This automatically set the year in the footer to the current year.
    this.year = document.getElementById("publish-year");   // id of the "span" element
    const currentYear = new Date().getFullYear().toString(); // Get the year from the system default time
    this.year!.setAttribute("datetime", currentYear); // Set a new attribute for html element with the target id
    this.year!.textContent = currentYear; // OR year.innerText = currentYear;
  }
}
