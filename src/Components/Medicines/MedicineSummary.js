import AddMedicineForm from './MedicineItems/AddMedicineForm';
import classes from './MedicineSummary.module.css';

const MedicineSummary = () =>{
  return (
    <section className={classes.summary}>
    <h2>Medicine Available </h2>
    <AddMedicineForm />
    </section>
  )
};

export default MedicineSummary;