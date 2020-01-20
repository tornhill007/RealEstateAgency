import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <div className={classes.itemWrapper}>
            <div className={classes.itemLeft}>
                <img src="http://www.trevoltebelle.com/wp-content/uploads/2016/03/malecostume-512.png" alt="user"
                     className={classes.itemImg}/>
            </div>
            <div className={classes.itemRight}>

                    {props.name}

            </div>
        </div>
        <div>
            <span>{props.countOfLikes}</span>
        </div>
    </div>
};

export default Post;