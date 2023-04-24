import classes from "./AvailableMedicine.module.css";

const DUMMY_Medicines = [
  {
    id: "m1",
    name: "Dolo",
    description: "For Fever",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Paracetamol",
    description: "Fever!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Crocin",
    description: "Headache",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Disprin",
    description: "Headache",
    price: 18.99,
  },
];

const AvailableMedicine = () => {
  const mealsList = DUMMY_Medicines.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMedicine;