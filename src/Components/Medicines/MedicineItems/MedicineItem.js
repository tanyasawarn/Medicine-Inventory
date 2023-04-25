import { useContext } from "react";
import classes from "./MedicineItems.module.css";
import MedicineItemForm from "./MedicineItemForm";
import CartContext from "../../Store/CartContext";


const MedicineItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs.${props.price.toFixed(2)}`;

  

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <form>
       <div>
       <label>{props.name}</label>
      <label className={classes.description}>{props.description}</label> 
      <label className={classes.quantity}>{props.quantity}</label>
      <label className={classes.price}>{price}</label>
       </div>

      <MedicineItemForm onAddToCart={addToCartHandler} />
    </form>
  );
};

export default MedicineItems;
