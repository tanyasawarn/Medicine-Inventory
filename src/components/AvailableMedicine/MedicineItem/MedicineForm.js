import classes from "./MedicineForm.module.css";

const MedicineForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MedicineForm;