import React from 'react';
import classes from './JobsPosition/JobsPosition.module.css';
import consts from './JobsPosition/consts'

const JobsPosition = (props) => {
    let pathname = props.location.pathname.substr(1).split('/')[1];
    console.log(pathname, consts);
    try {
        var {title, text} = consts[pathname];
    } catch (e) {
        var title = 'ERROR 404';
        var text = 'text not found';
    }
    return <div className={classes.wrapper}>
        <div className={classes.wrapperBlock}>
            <h1 className={classes.head}>{title}</h1>
            <div className={classes.item} dangerouslySetInnerHTML={{__html: text}}>
            </div>
        </div>
    </div>
};

export default JobsPosition;