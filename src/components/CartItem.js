import { useDispatch } from 'react-redux';
import {
  increaseQuantity as increase,
  decreaseQuantity as decrease,
  deleteItem as remove,
} from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
        <div>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
        </div>
        <button onClick={() => dispatch(remove(item.id))}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
