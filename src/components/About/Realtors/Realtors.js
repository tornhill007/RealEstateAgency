import React from 'react';
import classes from './Realtors.module.css';
import {realtorsContent} from "../../../common/arrayContent";

const Realtors = (props) => {
    if (props.realtors.length === 0) {
            props.setRealtors(realtorsContent.slice(((props.currentPage * 6) - 6), ((props.currentPage * 6))))
    }

    let pagesCount = Math.ceil(props.totalRealtorsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + " ");
    }

    function onPageChanged(p) {
            props.setCurrentPage(p);
            props.setRealtors((realtorsContent.slice(((p * 6) - 6), ((p * 6)))))
    }

    return <div>
        <div className={classes.wrapper}>
            {
                props.realtors.map(u => <div key={u.id} className={classes.wrapperBlock}>
                    <div className={classes.imgWrap}>
                        <img src={u.photoUrl} className={classes.img} alt=""/>
                    </div>
                    <div>
                    <span className={classes.itemName}>
                        {u.fullName}
                    </span>
                        <span className={classes.itemWrap}>
                        {u.position}
                    </span>
                        <span className={classes.itemWrap}>
                        {u.region}
                    </span>
                        <span className={classes.linkWrap}>
                        <a href="#" className={classes.itemLink}>{u.phoneNumber}</a>
                    </span>
                        <span className={classes.linkWrap}>
                        <a href="#" className={classes.itemLink}>{u.email}</a>
                    </span>
                    </div>

                </div>)
            }

        </div>
        <div className={classes.wrapperSpan}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage} onClick={(e) => {
                    onPageChanged(p)
                }}>{p}</span>
            })}

        </div>
    </div>
};

export default Realtors;