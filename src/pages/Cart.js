import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ₹{totalAmount}</p>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <button disabled>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Cart;
