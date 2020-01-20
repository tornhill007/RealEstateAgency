import React from 'react';
import classes from './Reviews.module.css';
import Post from "./Post/Post";

const Reviews = (props) => {
    let postsElement = props.posts.map(p => <Post name={p.name} countOfLikes={p.countOfLikes}/>)

    let newPost = React.createRef();

    let onAddPost = () => {
        let text = newPost.current.value;
        if(text != '') props.addPost();
        else(alert("Please, fill the form"))
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
        console.log(text);
    }
    return <div className={classes.item}>
        <h3>Reviews</h3>
        <div>
            <div className={classes.itemWrap}>
                <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} id="" cols="50" rows="5" maxlength="500" className={classes.input}></textarea>
            </div>
            <div className={classes.btnWrap}>
                <button onClick={onAddPost} className={classes.btn}>Add review</button>
            </div>
        </div>
        <div>
            {postsElement}
        </div>
    </div>
};

export default Reviews;