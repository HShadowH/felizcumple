import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CumpleanosComponent } from './cumpleanos/cumpleanos.component';
import { EmoticonParticlesComponent } from './emoticon-particles/emoticon-particles.component';
import { ParticlesComponent } from './particles/particles.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CumpleanosComponent,
    EmoticonParticlesComponent,
    ParticlesComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
