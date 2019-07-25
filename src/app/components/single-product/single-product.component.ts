import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  images = [
    { id: 1, url: 'assets/images/product_image1.png' },
    { id: 2, url: 'assets/images/product_image2.png' },
    { id: 3, url: 'assets/images/product_image3.png' },
    { id: 4, url: 'assets/images/product_image4.png' }
  ];

  activeImageUrl = 'assets/images/product_image1.png';

  constructor() {}

  onClickPicture(imageUrl) {
    this.activeImageUrl = imageUrl;
  }
}
