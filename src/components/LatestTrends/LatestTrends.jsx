import classes from "./LatestTrends.module.css";
import iconRight from "../../media/Right.svg";
import firstImage from "../../media/picture-01.png";
import secondImage from "../../media/picture-02.png";
import thirdImage from "../../media/picture-03.png";

function LatestTrends() {
    return (
        <section className={classes.trends}>
            <div className={classes.trendsContainer}>
                <header className={classes.trendsHeader}>
                    <div className={classes.trendsTitle}>
                        <h2>Be aware of the latest trends</h2>

                        <p>Stay informed of new trends, but also of our various offers.</p>

                        <a href="asd">
                            Learn more
                            <img src={iconRight} alt="" />
                        </a>
                    </div>

                    <div className={classes.trendsForm}>
                        <input type="text" placeholder="email@address.com" />

                        <button>Subscribe</button>
                    </div>
                </header>

                <div className={classes.slider}>
                    <img src={firstImage} alt="firstImage" />
                    <img src={secondImage} alt="secondImage" />
                    <img src={thirdImage} alt="thirdImage" />
                </div>

                <div className={classes.inspirations}>
                    <h1>Inspirations</h1>

                    <p>Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
                </div>
            </div>
        </section>
    );
};

export default LatestTrends;