import React from 'react';
import classes from './Rooms.module.css';
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";

class RoomsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: []};
    }

    // handleChange(event) {
    //     const { setFilterRooms } = this.props;
    //     this.setState({value: event.target.value});
    //     setFilterRooms(event.target.value);
    // }

    render() {
        return <form onSubmit={this.props.handleSubmit}>
            <h3>Number of rooms:</h3>
            <div className={classes.wrap}>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room1"} component={Input}/> 1+ studio
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room2"} component={Input}/> 2
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room3"} component={Input}/> 3
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room4"} component={Input}/> 4
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room5"} component={Input}/> 5
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"room6"} component={Input}/> 6
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"Penthouse"} component={Input}/> Penthouse
                </div>
                <div className={classes.item}>
                    <Field type={"checkbox"} name={"House"} component={Input}/> House
                </div>
            </div>
            <div className={classes.submitWrap}>
                <button className={classes.submit}>Ok</button>
            </div>
        </form>
    };
}

export default RoomsForm;
