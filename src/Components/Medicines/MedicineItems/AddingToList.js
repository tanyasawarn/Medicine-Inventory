import { useState } from "react";
import MedicineItems from "./MedicineItems";
import AddMedicineForm from "./AddMedicineForm";
import classes from "./AddingToList.module.css";

const MedicineList = (props) => {
  const [medicines, setMedicines] = useState(props.medicines);

  const addMedicineHandler = (newMedicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  return (
    <div className={classes.container}>
      <AddMedicineForm onAddMedicine={addMedicineHandler} />
      {medicines.map((medicine) => (
        <MedicineItems
          key={medicine.id}
          id={medicine.id}
          name={medicine.name}
          description={medicine.description}
          quantity={medicine.quantity}
          price={medicine.price}
        />
      ))}
    </div>
  );
};

export default MedicineList;
