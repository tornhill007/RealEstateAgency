import React from 'react';
import classes from './Footer.module.css';


const Footer = () => {
    return <div className={classes.footerWrapper}>
        <div className={classes.wrap}>
            <div className={classes.item}>
                <div>
                    <span>SkyAgency</span>
                </div>
                <div className={classes.textLeft}>

                    <span>Long-term rental and sale of luxury apartments in Vinnytsia 2012 © Real estate agency “Sky Agency"</span>
                </div>
            </div>
            <div className={classes.item}>
                <a href=""><img src="/instagram.png" alt="instagram" className={classes.socialWrap}/></a>
                <a href=""><img src="/facebook.png" alt="instagram" className={classes.socialWrap}/></a>
                <a href=""><img src="/twitter.png" alt="instagram" className={classes.socialWrap}/></a>
                <div className={classes.emblemWrap}>
                    <div>
                        <img src="/whatsapp.png" alt="instagram" className={classes.socialContact}/>
                        <span>+38 063 141 03 20</span>
                    </div>
                    <div>
                        <img src="/mail.png" alt="instagram" className={classes.socialContact}/>
                        <span>tornhill1997@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={classes.item}>
                <span>The site is developed by </span>
                <span>Andrew Komar</span>
            </div>
        </div>
    </div>
};

export default Footer;