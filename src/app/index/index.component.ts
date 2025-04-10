import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideImages = [
    {
      imageSrc: 'assets/agro.png',
      imageAlt: 'agro'
    },
    {
      imageSrc: 'assets/agro2.png',
      imageAlt: 'agro 2'
    },
    {
      imageSrc: 'assets/agro3.jpg',
      imageAlt: 'agro 3'
    },
    {
      imageSrc: 'assets/agro4.jpg',
      imageAlt: 'agro 4'
    },
    {
      imageSrc: 'assets/agro5.jpg',
      imageAlt: 'agro 5'
    },
    {
      imageSrc: 'assets/agro6.jpg',
      imageAlt: 'agro 6'
    },
    {
      imageSrc: 'assets/agro7.jpg',
      imageAlt: 'agro 7'
    },
    {
      imageSrc: 'assets/agro8.jpg',
      imageAlt: 'agro 8'
    },
    {
      imageSrc: 'assets/agro9.jpg',
      imageAlt: 'agro 9'
    },
  ];

}
