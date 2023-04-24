import React, { useContext } from "react";
import classes from './MedicneDetails.module.css';
import Card from "../UI/Card/Card";
import AvailableMedicine from "../AvailableMedicine/AvailableMedicines";
import CartContext from '../Store/cart-context';
 
const MedicineDetails = () =>{
    const { addToCart } = useContext(CartContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const product = {
            name,
            description,
            price,
            quantity
        };

        addToCart(product);
    };

    return (
      <Card> 
        <form className={classes.form} onSubmit={handleSubmit}>
    
        <label>Medicine Name:</label>
        <input type="text" name="name"   />
        <label>Description:</label>
        <input type="text" name="description"   />
        <label>Price:</label>
        <input type="number" name="price"   />
        <label>Quantity:</label>
        <input type="number" name="quantity"   />
        <button type="submit">Add Product</button>
        
        </form>
        <AvailableMedicine />
         
        </Card>
    
      );
};

export default MedicineDetails;
