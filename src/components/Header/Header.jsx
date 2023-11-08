import classes from "./Header.module.css";
import imageContact from "../../media/contact.svg";
import iconMenu from "../../media/icon-menu.svg";
import scrollDown from "../../media/Scroll Down.svg";
import scrollDownImg from "../../media/Scroll Downl.png";


function Header() {
    return (
        <section className={classes.header}>
            <div className={classes.headerContainer}>
                <header className={classes.pageHeader}>
                    <div className={classes.menu}>
                        <h1>antic</h1>

                        <nav className={classes.navBar}>
                            <a href="p">Products</a>
                            <a href="t">Trends</a>
                        </nav>
                    </div>

                    <img className={classes.imageContact} src={imageContact} alt="imageContact" />
                    <img className={classes.iconMenu} src={iconMenu} alt="iconMenu" />
                </header>

                <div className={classes.hero}>
                    <div className={classes.heroText}>
                        <div className={classes.heroDescription}>
                            <h2>HOME DESIGN</h2>

                            <div className={classes.heroTitle}>
                                <h2>Elegance for Interiors & Exteriors</h2>

                                <p>We provide everyone with modern, trendy, quality furniture</p>
                            </div>
                        </div>

                        <img className={classes.scrollDown} src={scrollDown} alt="scrollDown" />
                        <img className={classes.scrollDownImg} src={scrollDownImg} alt="scrollDown" />
                    </div>

                    <div className={classes.heroBackground}>
                        <div className={classes.picture}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;