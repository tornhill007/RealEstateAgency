import React from 'react';
import {NavLink} from "react-router-dom";
import arrayContent from "../../../common/arrayContent";
import consts from "../../About/Jobs/JobsPosition/consts";
import classes from './ApartmentContent.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faHome, faLock, faTools} from "@fortawesome/free-solid-svg-icons";
import {MyGallery} from "./Gallery/Gallery";
import GoogleApiWrapper from "../../Contacts/Map/Map";
import {reduxForm} from "redux-form";
import SellFormContainer from "../../Selling/SellForm/SellFormContainer";
import SubmitFormContainer from "./SubmitFormContainer";

const SubmitReduxForm = reduxForm({form: 'submitForm'})(SubmitFormContainer)

export class ApartmentContent extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (formData) => {
        console.log(formData);
    }
// const ApartmentContent = (props) => {
    // if (props.apartmentContent.length === 0) {
    //     props.setContent( arrayContent
    //     )
    // }
 // const onClickLocation = () => {
 //
 // }

    state = {
        isMap: 1
    };

    onRenderMap = () => {
        const {isMap} = this.state;
        this.setState({isMap: 2})
    };

    onRenderMain = () => {
        this.setState({isMap: 1})
    }

    onRenderEquip = () => {
        this.setState({isMap: 3})
    }
    onRenderForm = () => {
        this.setState({isMap: 4})
    }


render() {

    let pathname = this.props.location.pathname.substr(1).split('/')[1];
    console.log(pathname);
    try {
        var content = arrayContent[pathname - 1];
    } catch (e) {
        var content = 'ERROR 404';
    }

    const {isMap} = this.state;

    return <div className={classes.wrapper}>
        <div className={classes.wrapperBlock}>
            <div className={classes.wrapHead}>
                <div className={classes.WrapHeadLeft}>
                    <div className={classes.btnReturnWrap}>
                        <NavLink to='/catalog' className={classes.btnReturn}>&lt; Return to catalog</NavLink>
                    </div>
                    <div className={classes.itemHeadLeft}>
                        <span>{content.advertName}</span>
                    </div>
                </div>
                <div className={classes.WrapHeadRight}>
                    <div className={classes.itemHeadRight}>Sharing</div>
                    <div className={classes.WrapHeadRightSpan}>
                        <span className={classes.btnSubmitApp} onClick={this.onRenderForm}>Submit your application</span>
                    </div>
                </div>
            </div>

            <div>
                <div className={classes.wrapHead}>
                    <div className={classes.wrapHeadSpan}>
                        <span>{content.location}</span>
                        <span className={classes.itemGaleryHead}>{content.complex}</span>
                    </div>
                    <div className={classes.itemGalerySpan}>
                        <span>ID:{content.id}</span>
                        <span className={classes.location} onClick={this.onRenderMain}>Main information</span>
                        <span className={classes.location} onClick={this.onRenderEquip}>Equipment</span>
                        <span className={classes.location} onClick={this.onRenderMap}>Location</span>
                    </div>
                </div>
                <div className={classes.galleryWrapper}>
                    <div className={classes.itemWrapLeft}>
                        <MyGallery arrayContent={content.images}/>
                    </div>

                    {isMap == 2 && <div className={classes.map}>
                        <GoogleApiWrapper pathname={pathname}/>
                    </div>}

                    {isMap == 3 && <div className={classes.equip} dangerouslySetInnerHTML={{__html: content.equipment}}>

                    </div>}

                    {isMap == 1 && <div className={classes.itemWrapRight}>
                        <div className={classes.containerHead}>
                            <div className={classes.itemContainer}>
                                <span>
                                    Room
                                </span>
                                <span>
                                    {content.roomAmount}
                                </span>
                                <div className={classes.itemRoomDesc}>
                            <span>
                                {content.roomDesc}
                            </span>
                                </div>
                            </div>
                            <div className={classes.itemContainer}>
                        <span>
                            Area
                        </span>
                                <span>
                            {content.area} m<sup>2</sup>
                        </span>
                                <div className={classes.itemRoomDesc}>
                            <span>
                                {content.areaLiving} m<sup>2</sup> Living
                            </span>
                                    <span>
                                {content.areaKitchen} m<sup>2</sup> Kitchen
                            </span>
                                </div>
                            </div>
                            <div className={classes.itemContainer}>
                        <span>
                            Price
                        </span>
                                <span>
                            {content.price} USD
                        </span>
                                <div className={classes.itemRoomDesc}>
                                    <span>For 1 m<sup>2</sup></span>
                                    <span>{content.priceMetr} USD</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.itemRoomDescName}>
                            <div>
                        <span>
                            Description
                        </span>
                            </div>
                            <div className={classes.itemRoomDesc}>
                        <span>
                            {content.descriptionFull}
                        </span>
                            </div>
                        </div>
                        <div className={classes.containerMenu}>
                            <div className={classes.itemContainer}>
                                <div>
                                    <span>Floor</span>
                                </div>
                                <div className={classes.itemRoomDesc}>
                                    <div>
                                        <FontAwesomeIcon icon={faBuilding} size='2x' className={classes.icon}/>
                                    </div>
                                    <span>
                                {content.floor} floor from {content.floorMax}
                            </span>
                                    <span>
                                {content.building}
                            </span>
                                    <span>
                                {content.elevator}
                            </span>
                                </div>
                            </div>
                            <div className={classes.itemContainer}>
                                <div>
                                    <span>Layout</span>
                                </div>
                                <div className={classes.itemRoomDesc}>
                                    <FontAwesomeIcon icon={faHome} size='2x' className={classes.icon}/>
                                    <span>
                                {content.layout}
                            </span>
                                </div>
                            </div>
                            <div className={classes.itemContainer}>
                                <div>
                                    <span>Repair</span>
                                </div>
                                <div className={classes.itemRoomDesc}>
                                    <FontAwesomeIcon icon={faTools} size='2x' className={classes.icon}/>
                                    <span>{content.repair}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.itemRoomDescName}>
                            <div>
                                <span>The contact person</span>
                            </div>
                            <div className={classes.itemRoomDesc}>
                                <img
                                    src="https://kievintlrealty.com.ua/assets/main_avatar-5042ba84db413fc4b17edfeb0ab4456a3f6b76e90fab5407d9018fdd9792a6da.jpg"
                                    alt="photoOwner"/>
                                <span className={classes.itemContact}>Admin</span>
                            </div>
                        </div>
                    </div>}
                    {isMap == 4 && <div className={classes.submForm}>
                        <SubmitReduxForm onSubmit={this.onSubmit}/>
                    </div>}



                </div>
            </div>
        </div>
    </div>
};
}
// export default ApartmentContent;