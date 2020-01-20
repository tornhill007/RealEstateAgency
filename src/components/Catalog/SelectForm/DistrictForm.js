import React from 'react';
import classes from './District.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

class DistrictForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {value: []};
}
    render() {


        return <form onSubmit={this.props.handleSubmit}>
            <h3>District:</h3>
            <div className={classes.wrap}>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"zamostya"} component={Input}/> Zamostyansk district
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"leninsky"} component={Input}/> Leninsky district
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"oldTown"} component={Input}/> Old Town District
                </div>
            </div>
            <div className={classes.submitWrap}>
                <button className={classes.submit}>Ok</button>
            </div>
        </form>
    };
}

export default DistrictForm;
