import Card from "../UI/Card";
import MedicineItems from "./MedicineItems/MedicineItem";
import classes from "./AvailableMedicine.module.css";

const Dummy_Medicines = [
  {
    id: "m1",
    name: "Dolo",
    description: " Fever",
    price: 22.99,
  
  },
  {
    id: "m2",
    name: "Paracetamol",
    description: "Fever",
    price: 16.5,
   
  },
  {
    id: "m3",
    name: "Disprin",
    description: "Headache",
    price: 12.99,
   
  },
  {
    id: "m4",
    name: "Vicks",
    description: "Cold",
    price: 18.99,
   
  },
];

const AvailableMedicine = () => {
  const medicineList = Dummy_Medicines.map((medicine) => (
    <MedicineItems
      key={medicine.id}
      id={medicine.id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
      
    />
  ));
  return (
    <section className={classes.medicine}>
      <Card>
        <ul>{medicineList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
