import React, { useState } from 'react';

const Basket = () => {
  const [cartItems, setCartItems] = useState([]); // Массив выбранных покупок

  // Функция для добавления товара в корзину
  const addToCart = (item) => {
    // Проверяем, есть ли товар уже в корзине
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Если товар уже в корзине, увеличиваем его количество
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      // Если товара нет в корзине, добавляем его
      item.quantity = 1;
      setCartItems([...cartItems, item]);
    }
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (item) => {
    // Уменьшаем количество товара
    item.quantity -= 1;
    setCartItems([...cartItems]);

    if (item.quantity === 0) {
      // Если количество достигло нуля, удаляем товар из корзины
      const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCart);
    }
  };

  // Функция для вычисления общей стоимости
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div className="basket">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="basket-item">
              <p>{item.name}</p>
              <p>{item.price} руб.</p>
              <p>Количество: {item.quantity}</p>
              <button className="basket-button" onClick={() => removeFromCart(item)}>
                Удалить
              </button>
            </div>
          ))}
          <p className="total-price">Общая стоимость: {calculateTotalPrice()} руб.</p>
          <button>Оформить заказ</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
