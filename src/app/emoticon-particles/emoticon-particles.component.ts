import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-emoticon-particles',
  template: `<div #particlesContainer class="particles-container"></div>`,
  styleUrls: ['./emoticon-particles.component.css']
})
export class EmoticonParticlesComponent implements OnInit, OnDestroy {
  @ViewChild('particlesContainer', { static: true }) particlesContainer: ElementRef;
  private intervalId: number;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.createParticle();
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  createParticle(): void {
    const particle = this.renderer.createElement('div');
    const emojis = ['🎉', '🎁', '✨'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    this.renderer.setProperty(particle, 'textContent', emoji);
    this.renderer.addClass(particle, 'particle');
    this.renderer.setStyle(particle, 'left', `${Math.random() * 100}%`);
    this.renderer.setStyle(particle, 'fontSize', `${Math.random() * 24 + 12}px`);

    const animationDuration = Math.random() * 3 + 2; // Duración entre 2 y 5 segundos

    particle.animate([
      { transform: 'translateY(-100%)', opacity: 1 },
      { transform: 'translateY(100vh)', opacity: 0 }
    ], {
      duration: animationDuration * 1000,
      easing: 'linear',
      iterations: 1
    }).onfinish = () => {
      this.renderer.removeChild(this.particlesContainer.nativeElement, particle);
    };

    this.renderer.appendChild(this.particlesContainer.nativeElement, particle);
  }
}
