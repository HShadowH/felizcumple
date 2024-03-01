import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-cumpleanos',
  templateUrl: './cumpleanos.component.html',
  styleUrls: ['./cumpleanos.component.css']
})
export class CumpleanosComponent  implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createParticles(50); // Crea 50 partículas, ajusta este número a tus necesidades
  }

  createParticles(numberOfParticles: number): void {
    const container = this.el.nativeElement.querySelector('.particles-container');


    for (let i = 0; i < numberOfParticles; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');
      this.renderer.setStyle(particle, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(particle, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(particle, 'animation-duration', `${Math.random() * 3 + 2}s`); // Duración entre 2 y 5 segundos
      this.renderer.setStyle(particle, 'animation-delay', `-${Math.random() * 2}s`);

      this.renderer.appendChild(container, particle);
    
    }
  }
}
