import { Injectable } from '@angular/core';
import { Carts } from '../shared/models/Carts';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Carts = this.getCartLocalStorage();
  private cartSubject: BehaviorSubject<Carts> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      return;
    }

    this.cart.items.push(new CartItem(food));
    this.setCartLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    this.setCartLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartLocalStorage();
  }

  clearCart() {
    this.cart = new Carts();
    this.setCartLocalStorage();
  }

  getCartObservable(): Observable<Carts> {
    return this.cartSubject.asObservable()
  }

  private setCartLocalStorage(): void {
    // Sum of price
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    // Sum of quantity
    this.cart.totalCount  = this.cart.items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

    const cartJSON = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJSON);
    this.cartSubject.next(this.cart);
  }

  private getCartLocalStorage() {
    const cartJSON = localStorage.getItem('Cart');
    return cartJSON ? JSON.parse(cartJSON) : new Carts();
  }
}
