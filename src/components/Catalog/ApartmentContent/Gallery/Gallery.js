import ImageGallery from 'react-image-gallery';
import React from 'react';
import classes from './Gallery.module.css';
import arrayContent from "../../../../common/arrayContent";
// const images = [
//     {
//         original: 'https://image.blagovist.ua/285909404/full',
//         thumbnail: 'https://image.blagovist.ua/285909404/full',
//     },
//     {
//         original: 'https://image.blagovist.ua/285909416/full',
//         thumbnail: 'https://image.blagovist.ua/285909416/full',
//     },
//     {
//         original: 'https://image.blagovist.ua/285909420/full',
//         thumbnail: 'https://image.blagovist.ua/285909420/full',
//     },
//     {
//         original: 'https://image.blagovist.ua/285909391/full',
//         thumbnail: 'https://image.blagovist.ua/285909391/full',
//     },
//     {
//         original: 'https://res.cloudinary.com/hemcfvrk2/image/upload/c_lfill,g_xy_center,x_512,y_615,w_1200,h_700,q_auto:eco,fl_lossy,f_auto/v1484357508/xujndfeu79n9msyj4pz3.jpg',
//         thumbnail: 'https://res.cloudinary.com/hemcfvrk2/image/upload/c_lfill,g_xy_center,x_512,y_615,w_1200,h_700,q_auto:eco,fl_lossy,f_auto/v1484357508/xujndfeu79n9msyj4pz3.jpg',
//     },
//     {
//         original: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/984399/Hearth-Model-Unit-IMG-0370_webopt_2MB.jpg?crop=(0,8,300,199.25000000000028)&cropxunits=300&cropyunits=200&quality=85&scale=both&',
//         thumbnail: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/984399/Hearth-Model-Unit-IMG-0370_webopt_2MB.jpg?crop=(0,8,300,199.25000000000028)&cropxunits=300&cropyunits=200&quality=85&scale=both&',
//     },
//     {
//         original: 'https://iglu.com.au/wp-content/uploads/2018/09/iglu-central-park-hero-share-6-mid.jpg',
//         thumbnail: 'https://iglu.com.au/wp-content/uploads/2018/09/iglu-central-park-hero-share-6-mid.jpg',
//     }
// ];

export class MyGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ImageGallery items={this.props.arrayContent} />
    }
}