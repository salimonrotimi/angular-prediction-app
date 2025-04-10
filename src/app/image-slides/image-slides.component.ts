import { Component, Input, OnInit } from '@angular/core';

interface imageSlidesInterface{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-image-slides',
  templateUrl: './image-slides.component.html',
  styleUrls: ['./image-slides.component.css']
})
export class ImageSlidesComponent implements OnInit {

  /* the @Input() decorator converts the "images" array into a property that can be binded
     to the "app-image-slides" selector on the "index.component.html" page i.e.
     <app-image-slides [images]= "">  */
  @Input() images: imageSlidesInterface[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 0;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval)
  }

  // This sets index of images on dots or indicators click
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if( this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
}
