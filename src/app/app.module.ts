import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [HeaderComponent]
  // bootstrap: [HeaderComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(HeaderComponent, { injector: this.injector });
    customElements.define('header-element', el);
  }
}
