import { Component } from '@angular/core';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent {
  products = [
    { name: 'Product 1', description: 'High-quality product 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Product 2', description: 'Best-selling product 2', price: 150, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Product 3', description: 'Popular product 3', price: 200, imageUrl: 'https://via.placeholder.com/150' }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter(item => item !== product);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    if (this.cart.length > 0) {
      alert('Checkout successful! Thank you for your purchase!');
      this.cart = []; 
    } else {
      alert('Your cart is empty. Please add items before checking out.');
    }
  }
}
