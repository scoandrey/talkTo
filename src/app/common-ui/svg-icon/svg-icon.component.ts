import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <use [attr.href]="href"></use>
    </svg>
  `,
})
export class SvgIconComponent {
  @Input() icon: string = '';
  get href(): string {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}

