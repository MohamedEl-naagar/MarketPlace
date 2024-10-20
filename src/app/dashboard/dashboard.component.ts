import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products = [
    { name: 'Product A', description: 'Description of product A', price: 100, image: 'https://via.placeholder.com/150' },
    { name: 'Product B', description: 'Description of product B', price: 150, image: 'https://via.placeholder.com/150' }
  ];

  newProduct = { name: '', description: '', price: 0, image: '' };

  addProduct() {
    if (this.newProduct.name && this.newProduct.description && this.newProduct.price && this.newProduct.image) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', description: '', price: 0, image: '' };
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.newProduct.image = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  removeProduct(product: any) {
    this.products = this.products.filter(item => item !== product);
  }
}
