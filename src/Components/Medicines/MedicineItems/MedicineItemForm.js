import { useRef, useState } from "react";
import Input from "../../UI/input";
import classes from "./MedicineItemForm.module.css";

const MedicineItemForm = (props) => {
    
   const [amountIsValid, setAmountIsValid] =  useState(true);

    const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const entereAmount = amountInputRef.current.value;
    const entereAmountNumber = +entereAmount;

    if(entereAmount.trim().length === 0 || entereAmount < 1 || entereAmount > 10)
    {
       setAmountIsValid(false);
       return;
    }
    props.onAddToCart(entereAmountNumber);

  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MedicineItemForm;
