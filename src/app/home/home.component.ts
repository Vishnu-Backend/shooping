import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  bannerImages = [
    'banners/banner1.webp',
    'banners/banner2.webp',
    'banners/banner3.webp'
  ];

  topProducts: any[] = [
    { name: 'Summer T-Shirt', category: 'summer', image: 'images/summer-tshirt.webp' },
    { name: 'Winter Jacket', category: 'winter', image: 'images/winter-jacket.webp' },
    { name: 'Party Dress', category: 'party', image: 'images/party-dress.webp' },
    { name: 'Casual Jeans', category: 'casual', image: 'images/casual-jeans.webp' },
    { name: 'Formal Suit', category: 'formal', image: 'images/formal-suit.webp' },
    { name: 'Beach Shorts', category: 'beachwear', image: 'images/beach-shorts.webp' },
    { name: 'Workout Set', category: 'sportswear', image: 'images/workout-set.webp' },
    { name: 'Raincoat', category: 'rainwear', image: 'images/raincoat.webp' },
  ];

  deals = [
    {
      name: 'Flat 50% on T-Shirts',
      image: 'deals/beach-shorts.webp',
      description: 'Get premium quality at half the price.',
      originalPrice: 999,
      discountedPrice: 499
    },
    {
      name: 'Winter Sale - Jackets',
      image: 'deals/winter-jacket.webp',
      description: 'Stay warm with cool prices.',
      originalPrice: 2999,
      discountedPrice: 1499
    },
    {
      name: 'Buy 1 Get 1 Free on Jeans',
      image: 'deals/party-dress.webp',
      description: 'Stylish comfort for everyone.',
      originalPrice: 1999,
      discountedPrice: 999
    }
  ];

  testimonials = [
    { name: 'Amit Sharma', message: 'Amazing service and quality! Will shop again.' },
    { name: 'Priya Desai', message: 'Loved the variety and the fast delivery.' },
    { name: 'Ravi Mehta', message: 'The products were just as described. Excellent!' }
  ];

  newsletterEmail: string = '';

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
    }, 5000);
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByProductId(index: number, product: any): string {
    return product.id || index;
  }

  subscribeNewsletter(): void {
    if (this.newsletterEmail.trim()) {
      console.log('Subscribed email:', this.newsletterEmail);
      alert(`Thank you for subscribing, ${this.newsletterEmail}!`);
      this.newsletterEmail = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
