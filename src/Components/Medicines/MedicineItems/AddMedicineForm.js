import { useState } from "react";
import classes from "./AddMedicineForm.module.css";

const AddMedicineForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const newMedicine = {
      id: Math.random().toString(),
      name: name,
      description: description,
      quantity: quantity,
      price: price,
    };

   props.onAddMedicine(newMedicine);

    setName("");
    setDescription("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>Medicine Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className={classes.control}>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div className={classes.control}>
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
      </div>
      <div className={classes.control}>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </div>
      <div className={classes.actions}>
        <button type="submit">Add Medicine</button>
      </div>
    </form>
  );
};

export default AddMedicineForm;
