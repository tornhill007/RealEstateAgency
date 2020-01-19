import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Catalog.module.css';
import {required} from "../../utils/validator";
import {Input} from "../../common/FormsControl/FormsControl";
import {Field, reduxForm} from "redux-form";
import SelectForm from "./SelectForm/SelectForm";
import ApartmentsContainer from "./Apartments/ApartmentsContainer";
import PriceForm from "./SelectForm/PriceForm";
import RoomsForm from "./SelectForm/RoomsForm";
import AreaForm from "./SelectForm/AreaForm";
import DistrictForm from "./SelectForm/DistrictForm";
import ComplexForm from "./SelectForm/ComplexForm";
import BuildingForm from "./SelectForm/BuildingForm";
import RepairForm from "./SelectForm/RepairForm";


const PriceReduxForm = reduxForm({form: 'price'})(PriceForm)
const RoomsReduxForm = reduxForm({form: 'room'})(RoomsForm)
const AreaReduxForm = reduxForm({form: 'area'})(AreaForm)
const DistrictReduxForm = reduxForm({form: 'district'})(DistrictForm)
const ComplexReduxForm = reduxForm({form: 'complex'})(ComplexForm)
const BuildingReduxForm = reduxForm({form: 'building'})(BuildingForm)
const RepairReduxForm = reduxForm({form: 'repair'})(RepairForm)

const Catalog = (props) => {
    const onSubmit = (formData) => {

        console.log(formData);
    }

    return <div>
        <h1 className={classes.head}>Catalog Filter</h1>
        <div className={classes.wrapper}>
            <div className={classes.wrapperBlock}>
                <div className={classes.itemLeft}>
                    <div className={classes.itemLinkWrap}>
                        <NavLink to="" className={classes.itemLink}>
                            <span>Apartments for rent</span>
                        </NavLink>
                        <NavLink to="" className={classes.itemLink}>
                            <span>Sale of apartments</span>
                        </NavLink>
                    </div>
                    <div className={classes.wrapContent}>
                    <div>
                        <PriceReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <RoomsReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <AreaReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <DistrictReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <ComplexReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <BuildingReduxForm onSubmit={onSubmit}/>
                    </div>
                    <div>
                        <RepairReduxForm onSubmit={onSubmit}/>
                    </div>
                    </div>
                </div>
                <div className={classes.itemRight}>
                    <div className={classes.itemWrapperHead}>
                        <span className={classes.itemSpan}>3475 apartments available</span>
                        <div className={classes.itemSpan}>
                        <SelectForm/>
                        </div>
                    </div>
                    <div>
                        <ApartmentsContainer/>
                    </div>
                </div>
            </div>

        </div>
    </div>
};

export default Catalog;