import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'My page',  
      icon: 'home',
      link: '',
    },
    {
      label: 'Chats',  
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Search',  
      icon: 'search',
      link: 'search',
    },
  ];
}
