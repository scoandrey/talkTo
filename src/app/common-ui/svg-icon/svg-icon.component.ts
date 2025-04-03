import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  template: `
    <svg class="icon">
      <use [attr.href]="href"></use>
    </svg>
  `,
  styles: [
    `
      .icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
    `,
  ],
})
export class SvgIconComponent {
  @Input() icon: string = '';

  get href(): string {
    return `/assets/svg/icons.svg#${this.icon}`;
  }
}
