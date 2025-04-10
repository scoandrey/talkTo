import { Component, Input, input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-subscribers-card',
  standalone: true,
  imports: [],
  templateUrl: './subscribers-card.component.html',
  styleUrl: './subscribers-card.component.scss'
})
export class SubscribersCardComponent {
@Input() profile!: Profile
}
