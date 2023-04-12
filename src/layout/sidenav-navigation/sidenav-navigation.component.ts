import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav-navigation',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.css'],
})
export class SidenavNavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
