import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CafePageComponent } from '../cafe-page/cafe-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agronegocio-page',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule,CafePageComponent, RouterModule],
  templateUrl: './agronegocio-page.component.html',
  styleUrl: './agronegocio-page.component.css'
})
export class AgronegocioPageComponent {
  
  slides = [
    {img: "/assets/images/cafe.jpg",title: "Café",routeUrl: "cafe"},
    {img: "/assets/images/etanol.jpg",title: "Etanol",routeUrl: "cafe"},
    {img: "/assets/images/milho.jpg",title: "Milho",routeUrl: "cafe"},
    {img: "/assets/images/soja.jpg",title: "Soja",routeUrl: "cafe"},
    {img: "/assets/images/sorgo.jpg",title: "Sorgo",routeUrl: "cafe"},
    {img: "/assets/images/trigo.jpg",title: "Trigo",routeUrl: "cafe"},
    {img: "/assets/images/agrokelvy.jpg",title: "Agro Kelvy",routeUrl: "cafe"},
  ]

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "inifinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "inifinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      },
    ]    
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777",title: "teste",routeUrl:"cafe"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
}


