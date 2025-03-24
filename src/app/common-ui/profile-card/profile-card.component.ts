import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImageUrlPipe } from '../../helpers/pipes/imgUrl.pipe';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
