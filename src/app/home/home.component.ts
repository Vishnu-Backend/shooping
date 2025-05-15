import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true, // if using standalone components
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  bannerImages = [
    'banners/banner1.jpg',
    'banners/banner2.jpg',
    'banners/banner3.jpg'
  ];

  topProducts: any[] = [
    { name: 'Summer T-Shirt', category: 'summer', image: 'summer.jpg' },
    { name: 'Winter Jacket', category: 'winter', image: 'winter.jpg' },
    { name: 'Party Dress', category: 'party', image: 'party.jpg' },
    { name: 'Casual Jeans', category: 'casual', image: 'casual.jpg' },
    { name: 'Formal Suit', category: 'formal', image: 'formal.jpg' },
    { name: 'Beach Shorts', category: 'summer', image: 'summer.jpg' },
    { name: 'Casual Jeans', category: 'casual', image: 'casual.jpg' },
    { name: 'Formal Suit', category: 'formal', image: 'formal.jpg' },
  ];

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
    }, 5000); // Slide every 5 seconds
  }

}
