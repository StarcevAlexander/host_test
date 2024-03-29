import { Component } from '@angular/core';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Мясная Делюкс',
      description:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    },
    {
      image: '2.png',
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    },
    {
      image: '3.png',
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      image: '4.png',
      title: 'Куриная Делюкс',
      description:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      image: '5.png',
      title: 'Барбекю Премиум',
      description:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      image: '6.png',
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    },
    {
      image: '7.png',
      title: 'Куриное трио',
      description:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
    {
      image: '8.png',
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
  ];

  public formValues = {
    productTitle: '',
    address : '',
    phone: '',
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
  }
  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address ) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    //ajax
    alert('Спасибо за заказ');

    this.formValues = {
      productTitle: '',
      address : '',
      phone: '',
    };
  }
}
