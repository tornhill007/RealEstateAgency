import React from "react"
import classes from './FormsControl.module.css';

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <input{...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>"Fill the form"</span> }
        </div>
    )
}