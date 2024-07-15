import { Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @ViewChild('typedText') typedText!: ElementRef;

  ngOnInit() {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

  ngAfterViewInit(): void {
    const options = {
      // strings: [
      //   'Hello! I am Rishabh Kumar,',
      //   'Welcome to my Portfolio',
      //   'I am a passionate and creative frontend developer',
      //   'I have a strong background in building responsive and user-friendly web applications using modern technologies such as HTML, CSS, and TypeScript frameworks like Angular.'
      // ],
      strings: [
        'Hello! I am Rishabh Kumar Welcome to my Portfolio I am a passionate and creative frontend developer I have a strong background in building responsive and user-friendly web applications using modern technologies such as HTML, CSS, and TypeScript frameworks like Angular.'
      ],
      typeSpeed: 50,
      // backSpeed: 50,
      // loop: true
    };

    const typed = new Typed(this.typedText.nativeElement, options);
  }


}
