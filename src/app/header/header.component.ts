import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  menuOpen = false;

  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Product', route: '/product' },
    { label: 'Contacts', route: '/contacts' },
    { label: 'Location', route: '/location' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  trackByLabel(index: number, item: any): string {
    return item.label;
  }

}
