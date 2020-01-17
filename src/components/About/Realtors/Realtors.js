import React from 'react';
import classes from './Realtors.module.css';

const Realtors = (props) => {
    if (props.realtors.length === 0) {
        if (props.currentPage == 1) {
            props.setRealtors([
                {
                    id: 1,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (97) 998 64 55",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 2,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 3,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 4,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 5,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 6,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Andrew Komar",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                }
            ])
        } else if (props.currentPage == 2) {
            props.setRealtors([
                {
                    id: 7,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Maks Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 8,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 9,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 10,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 11,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 12,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                }
            ])
        } else if (props.currentPage == 3) {
            props.setRealtors([
                    {
                        id: 13,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Dima Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 14,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 15,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 16,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 17,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 18,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    }
                ]
            )
        } else if (props.currentPage == 4) {
            props.setRealtors([
                    {
                        id: 19,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Maria Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 20,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 21,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 22,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 23,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 24,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    }
                ]
            )
        }
        // props.setRealtors([
        //         {
        //             id: 1,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (97) 998 64 55",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 2,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 3,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 4,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 5,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 6,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 7,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 8,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 9,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 10,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 11,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 12,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 13,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 14,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 15,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 16,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 17,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 18,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 19,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         },
        //         {
        //             id: 20,
        //             photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
        //             fullName: "Name Surname",
        //             position: "real estate consultant",
        //             region: "some region",
        //             phoneNumber: "+380 (50) 424 57 23",
        //             email: "Xxxxxxxxxx.Xx@gmail.com"
        //         }
        //     ]
        // )
    }

    let pagesCount = Math.ceil(props.totalRealtorsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + " ");
    }

    function onPageChanged(p) {
            props.setCurrentPage(p);
        if (p == 1) {
            props.setRealtors([
                {
                    id: 1,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (97) 998 64 55",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 2,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 3,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 4,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 5,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 6,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Andrew Komar",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                }
            ])
        }
        else if (p == 2) {
            props.setRealtors([
                {
                    id: 7,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Maks Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 8,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 9,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 10,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 11,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                },
                {
                    id: 12,
                    photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                    fullName: "Name Surname",
                    position: "real estate consultant",
                    region: "some region",
                    phoneNumber: "+380 (50) 424 57 23",
                    email: "Xxxxxxxxxx.Xx@gmail.com"
                }
            ])
        }
        else if(p == 3) {
            props.setRealtors([
                    {
                        id: 13,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Dima Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 14,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 15,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 16,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 17,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 18,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    }
                ]
            )
        }
        else if(p == 4) {
            props.setRealtors([
                    {
                        id: 19,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Maria Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 20,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 21,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 22,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 23,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Name Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    },
                    {
                        id: 24,
                        photoUrl: "https://www.w3schools.com/howto/img_avatar.png",
                        fullName: "Arlen Surname",
                        position: "real estate consultant",
                        region: "some region",
                        phoneNumber: "+380 (50) 424 57 23",
                        email: "Xxxxxxxxxx.Xx@gmail.com"
                    }
                ]
            )
        }
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