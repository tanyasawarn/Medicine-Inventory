import { useContext } from 'react';
import CartIcon from '../Cart/cartIcon';
import CartContext from '../Store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{

  const cartCtx = useContext(CartContext);

  const  numberOfCartItems= cartCtx.items.reduce((curNumber, item)=>{
    return (curNumber + item.amount + item.quantity);
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Cart Value</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton;