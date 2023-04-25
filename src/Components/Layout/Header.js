import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import medImage from './med.jpg';
import classes from './Header.module.css';
    
const Header = (props) =>{
  return(
    <Fragment>
         <header className={classes.header}>
        <h1>Medicine Admin Panel</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
    
        <img src={medImage} alt='medicine details'/>
        
    </div>
   
    </Fragment>
  )
};

export default Header;