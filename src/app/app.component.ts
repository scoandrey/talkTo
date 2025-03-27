import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './common-ui/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileCardComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
