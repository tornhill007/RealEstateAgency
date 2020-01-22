import React from 'react';
import _ from 'lodash';
import classes from './Apartments.module.css';
import {NavLink} from "react-router-dom";
import arrayContent from "../../../common/arrayContent";
import useWrappedRefWithWarning from "react-bootstrap/cjs/useWrappedRefWithWarning";

class Apartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sort: 'byDate', apartments: [],
            rooms: []};

        if (props.apartments.length === 0) {
            props.setApartments(arrayContent)
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps.filterRooms);
        return {
            sort : nextProps.sort,
            apartments: nextProps.apartments,
            rooms: nextProps.filterRooms
        };
    }


    sortArray = (sort, apartments) => {
        switch (sort) {
            case 'byDate': {
                return apartments.sort((a, b) => a.price > b.price ? 1 : -1);
            }
            case 'byPriceUp': {
                return apartments.sort((a, b) => a.price > b.price ? 1 : -1);
            }
            case 'byPriceDown': {
                return apartments.sort((a, b) => a.price < b.price ? 1 : -1);
            }
            case 'byPricePerUp': {
                return apartments.sort((a, b) => a.priceMetr > b.priceMetr ? 1 : -1);
            }
            case 'byPricePerDown': {
                return apartments.sort((a, b) => a.priceMetr < b.priceMetr ? 1 : -1);
            }
            case 'byAreaUp': {
                return apartments.sort((a, b) => Number(a.area) > Number(b.area) ? 1 : -1);
            }
            case 'byAreaDown': {
                return apartments.sort((a, b) => Number(a.area) < Number(b.area) ? 1 : -1);
            }
        }
    };

    filterArray = (filterArray, apartments) => {
        let res = [];
        if(filterArray.length === 0) {
            res = _.clone(apartments);
        }
        for (let item of filterArray) {
            let input = _.clone(apartments);

            if(item === 'room1') {
                res = _.concat(res, input.filter(item => item.roomAmount == 1));
            }
            if(item === 'room2')
                res = _.concat(res, input.filter(item => item.roomAmount == 2));
            if(item === 'room3')
                res = _.concat(res, input.filter(item => item.roomAmount == 3));
            if(item === 'room4')
                res = _.concat(res, input.filter(item => item.roomAmount == 4));
            if(item === 'room5')
                res = _.concat(res, input.filter(item => item.roomAmount == 5));
            if(item === 'room6')
                res = _.concat(res, input.filter(item => item.roomAmount == 6));
            if(item === 'House')
                res = _.concat(res, input.filter(item => item.house == true));
            if(item === 'Penthouse')
                res = _.concat(res, input.filter(item => item.penthouse == true));
            if(item === 'zamostya')
                res = _.concat(res, input.filter(item => item.district == 'Zamostyansk district'));
            if(item === 'leninsky')
                res = _.concat(res, input.filter(item => item.district == 'Leninsky district'));
            if(item === 'oldTown')
                res = _.concat(res, input.filter(item => item.district == 'Old Town district'));
            if(item === 'west')
                res = _.concat(res, input.filter(item => item.complex == 'West'));
            if(item === 'family')
                res = _.concat(res, input.filter(item => item.complex == 'Family comfort'));
            if(item === 'pearl')
                res = _.concat(res, input.filter(item => item.complex == 'Pearl of Podillya'));
            if(item === 'greens')
                res = _.concat(res, input.filter(item => item.complex == 'Green\'s'));
            if(item === 'premier')
                res = _.concat(res, input.filter(item => item.complex == 'Premier Tower'));
            if(item === 'dawn')
                res = _.concat(res, input.filter(item => item.complex == 'Dawn'));
            if(item === 'academic')
                res = _.concat(res, input.filter(item => item.complex == 'Academic residential district'));
            if(item === 'avalon')
                res = _.concat(res, input.filter(item => item.complex == 'Avalon 5'));
            if(item === 'teachers')
                res = _.concat(res, input.filter(item => item.complex == 'Teacher\'st'));
            if(item === 'comfort')
                res = _.concat(res, input.filter(item => item.complex == 'Comfort'));
            if(item === 'turkish')
                res = _.concat(res, input.filter(item => item.complex == 'Turkish City'));
            if(item === 'rainbow')
                res = _.concat(res, input.filter(item => item.complex == 'Rainbow'));
            if(item === 'sofia')
                res = _.concat(res, input.filter(item => item.complex == 'Sofia'));
            if(item === 'prestige')
                res = _.concat(res, input.filter(item => item.complex == 'Prestige Hall'));
            if(item === 'riviera')
                res = _.concat(res, input.filter(item => item.complex == 'Riviera'));
            if(item === 'waterfront')
                res = _.concat(res, input.filter(item => item.complex == 'Quay waterfront'));
            if(item === 'residence')
                res = _.concat(res, input.filter(item => item.complex == 'Residence'));
            if(item === 'newBuilding')
                res = _.concat(res, input.filter(item => item.building == 'New building'));
            if(item === 'khrushchev')
                res = _.concat(res, input.filter(item => item.building == 'Khrushchev'));
            if(item === 'stalinka')
                res = _.concat(res, input.filter(item => item.building == 'Stalinka'));
            if(item === 'royal')
                res = _.concat(res, input.filter(item => item.building == 'Royal House'));
            if(item === 'firstRent')
                res = _.concat(res, input.filter(item => item.repair == 'First Rent'));
            if(item === 'young')
                res = _.concat(res, input.filter(item => item.repair == '1-2 years'));
            if(item === 'middle')
                res = _.concat(res, input.filter(item => item.repair == '3-5 years'));
            if(item === 'old')
                res = _.concat(res, input.filter(item => item.repair == '5 Years and Older'));
            // if(item === 'priceFrom')
            //     res = _.concat(res, input.filter(item => item.price >= priceFrom));
        }
        return res;
    };

    render() {
        const { sort, apartments, rooms } = this.state;

        const filter = this.filterArray(rooms, apartments);
        const content = this.sortArray(sort, filter);

        console.log(content);
        return (<div>
            <div className={classes.wrapper}>
                {

                    content.map(u => u.isRent ?
                        <NavLink to={'/catalog/' + u.id} key={u.id} className={classes.wrapperBlock}>
                            <div className={classes.imgWrap}>
                                <img src={u.photoUrl} className={classes.img} alt=""/>
                            </div>
                            <div className={classes.wrapContent}>
                                <div className={classes.wrapContentBlock}>
                            <span className={classes.itemDesc}>
                                {u.desc}
                            </span>
                                    <div className={classes.itemContainer}>
                            <span className={classes.itemWrap}>
                                <a href="#" className={classes.itemLink}>{u.location}</a>
                            </span>
                                        <span className={classes.itemDisc}>
                                {u.district}
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.wrapContentAdd}>
                        <span className={classes.itemUsd}>
                            {u.price}
                            <text className={classes.usd}>USD</text>
                        </span>
                                <span className={classes.itemRoom}>
                            {u.roomNumber}
                        </span>
                                <span className={classes.itemArea}>
                            {u.area} m<sup>2</sup>
                        </span>
                                <span className={classes.itemView}>
                            View apartment
                        </span>
                            </div>
                        </NavLink> : null)
                }

            </div>

        </div>)
    }
}

export default Apartments;