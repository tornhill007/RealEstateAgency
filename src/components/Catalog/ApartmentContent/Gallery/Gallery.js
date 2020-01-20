import ImageGallery from 'react-image-gallery';
import React from 'react';
import classes from './Gallery.module.css';
import arrayContent from "../../../../common/arrayContent";


export class MyGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ImageGallery items={this.props.arrayContent} />
    }
}