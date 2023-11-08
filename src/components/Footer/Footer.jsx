import classes from "./Footer.module.css";
import blogImage from "../../media/blog-picture.png";
import rightArrow from "../../media/Right.svg";
import facebookIcon from "../../media/Facebook.svg";
import twitterIcon from "../../media/Twitter.svg";
import linkedinIcon from "../../media/Linkedin.svg";
import instagramIcon from "../../media/Instagram.svg";


function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.content}>
                    <h1>antic</h1>

                    <div className={classes.linkGroup}>
                        <div className={classes.groupName}>
                            <h2>Products</h2>

                            <div className={classes.groupLink}>
                                <a href="a">Furniture</a>
                                <a href="a">Decoration</a>
                                <a href="a">Storage</a>
                                <a href="a">Baby and child</a>
                                <a href="a">Connected home</a>
                            </div>
                        </div>

                        <div className={classes.groupName}>
                            <h2>Rooms</h2>

                            <div className={classes.groupLink}>
                                <a href="a">Living room</a>
                                <a href="a">Dining room</a>
                                <a href="a">Cooked</a>
                                <a href="a">Bedroom</a>
                                <a href="a">Bathroom</a>
                                <a href="a">Office</a>
                                <a href="a">Laundry</a>
                                <a href="a">Garage</a>
                            </div>
                        </div>

                        <div className={classes.groupName}>
                            <h2>Services</h2>

                            <div className={classes.groupLink}>
                                <a href="a">Click and collect</a>
                                <a href="a">Conception</a>
                                <a href="a">Installation</a>
                                <a href="a">Advices</a>
                                <a href="a">Gift card</a>
                            </div>
                        </div>

                        <div className={classes.groupName}>
                            <h2>About</h2>

                            <div className={classes.groupLink}>
                                <a href="a">Our story</a>
                                <a href="a">Our stores</a>
                                <a href="a">Our partners</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes.blog}>
                        <h1>We respect our planet</h1>

                        <div className={classes.post}>
                            <img className={classes.blogImage} src={blogImage} alt="blogImage" />

                            <p>We're taking positive steps to reduce our impact on the planet. For us, that means retailing responsibly.</p>

                            <a href="a">
                                Learn more
                                <img src={rightArrow} alt="rightArrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <div className={classes.socialNetworks}>
                        <img src={facebookIcon} alt="facebookIcon" />
                        <img src={twitterIcon} alt="twitterIcon" />
                        <img src={linkedinIcon} alt="linkedinIcon" />
                        <img src={instagramIcon} alt="instagramIcon" />
                    </div>

                    <div className={classes.legals}>
                        <p>© 2023 Diuta Veaceslav</p>

                        <div className={classes.legalsLinks}>
                            <a href="l">Privacy policy </a>
                            <a href="l">Term of service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;