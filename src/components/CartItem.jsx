import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import React from 'react'

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } = cartItem;
  return (
    <h1 className='text-3xl'>CartItem</h1>
  )
}

export default CartItem