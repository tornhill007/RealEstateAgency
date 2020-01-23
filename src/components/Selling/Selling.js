import React from 'react';
import classes from './Selling.module.css';
import {reduxForm} from "redux-form";
import SellForm from "./SellForm/SellForm";
import SellFormContainer from "./SellForm/SellFormContainer";



const SellReduxForm = reduxForm({form: 'sell'})(SellFormContainer)

const Selling = () => {

    const onSubmit = (formData) => {

        console.log(formData);
    }

    return <div className={classes.wrapper}>
        <div className={classes.wrapperImg}>
            <img src="http://www.readyaimorganize.com/wp-content/uploads/2018/10/how-to-sell-an-apartment-or-a-house-750x450.jpg" alt="sellApartment"/>
        </div>
        <div>
            <div>
                <SellReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    </div>
};

export default Selling;