import React, { useState} from "react";
import classes from './MedicalForm.module.css';
import Card from "../UI/Card/Card";
import HeaderCartButton from '../UI/Cart/HeaderCart'; 

const MedicalForm = () =>{
    const [medicine, setMedicine] = useState({
        name:'',
        description:'',
        price:0,
    });

    const handleChange = (event) =>{
         
        const {name, value} = event.target;
        setMedicine((prevMedicine) => ({
            ...prevMedicine,
            [name]: value,
        }));
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        setMedicine({
            name:'',
            description:'',
            price:0,
        });
    };

  return (
    <Card>
    <form classNmae={classes.form} onSubmit={submitHandler}>

    <label>Medicine Name:</label>
    <input type="text" name="name" value={medicine.name} onChange={handleChange} />
    <label>Description:</label>
    <input type="text" name="description" value={medicine.description} onChange={handleChange} />
    <label>Price:</label>
    <input type="number" name="price" value={medicine.price} onChange={handleChange} />
    <button type="submit">Add To Cart</button>
    </form>
    <HeaderCartButton />
</Card>
  );
};

export default MedicalForm;