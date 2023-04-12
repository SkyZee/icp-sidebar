import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SidenavNavigationComponent } from './layout/sidenav-navigation/sidenav-navigation.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SidenavNavigationComponent],
  template: `
    <app-sidenav-navigation />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
