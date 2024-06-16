import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const parallax = document.querySelector('.parallax') as HTMLElement;
    const scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  }
}