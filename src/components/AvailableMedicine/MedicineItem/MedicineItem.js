import classes from './MedicineItem.module.css';
import MedicineForm from './MedicineForm';
 
 
const MedicineItem = props => {

    const price = `Rs.${props.price.toFixed(2)}`;
 return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3> 
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{ price}</div>
        <div className={classes.quantity}>{ quantity}</div>
        </div>
        <div>
          <MedicineForm />
        </div>
    </li>
 );
};
export default MedicineItem;