import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductItemDto } from '../../dtos/ProductItemDto';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, NgForOf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public currency: string = '$';
  public productList: ProductItemDto[] = [
    {
      title: 'BonBons1',
      image: '../../../../assets/images/1.jpg',
      price: 10.00,
      saldItemsCount: 11,
      sale: 0
    },
    {
      title: 'Love',
      image: '../../../../assets/images/2.jpg',
      price: 12.00,
      saldItemsCount: 22,
      sale: 10
    },
    {
      title: 'Sweet',
      image: '../../../../assets/images/3.jpg',
      price: 13.00,
      saldItemsCount: 133,
      sale: 20
    },
    {
      title: 'BonBons and Sweet ',
      image: '../../../../assets/images/4.jpg',
      price: 12.00,
      saldItemsCount: 33,
      sale: 0
    },
    {
      title: 'Color of Sweet ',
      image: '../../../../assets/images/5.jpg',
      price: 15.00,
      saldItemsCount: 123,
      sale: 0
    },
    {
      title: 'Choko-love',
      image: '../../../../assets/images/6.jpg',
      price: 10.00,
      saldItemsCount: 45,
      sale: 0
    },

    {
      title: 'Chokolate gift',
      image: '../../../../assets/images/7.jpg',
      price: 20.00,
      saldItemsCount: 130,
      sale: 50
    },
    {
      title: 'Smile',
      image: '../../../../assets/images/8.jpg',
      price: 40.00,
      saldItemsCount: 23,
      sale: 20
    },
    {
      title: 'Red Hurt',
      image: '../../../../assets/images/9.jpg',
      price: 18.00,
      saldItemsCount: 43,
      sale: 0
    },
    {
      title: 'Ana Bana',
      image: '../../../../assets/images/10.jpg',
      price: 13.00,
      saldItemsCount: 133,
      sale: 0
    },
    {
      title: 'Monkey hurt',
      image: '../../../../assets/images/11.jpg',
      price: 14.00,
      saldItemsCount: 100,
      sale: 50
    },
    {
      title: 'Small box',
      image: '../../../../assets/images/12.jpg',
      price: 15.00,
      saldItemsCount: 1333,
      sale: 0
    },
  ]

}
