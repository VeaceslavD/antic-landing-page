import classes from "./Information.module.css";
import rightArrow from "../../media/Right.svg";

function Information() {
    return (
        <section className={classes.information}>
            <div className={classes.informationContainer}>
                <div className={classes.title}>
                    <h1>We stay by your side to design your projects</h1>

                    <a href="s">
                        Find out more
                        <img src={rightArrow} alt="" />
                    </a>
                </div>

                <div className={classes.services}>
                    <div class={classes.serviceCard}>
                        <h3>Our Advices</h3>

                        <p>What if you took advantage of this rather special period to rethink your interior? You spend
                            more
                            time at home so you might as well feel good there.</p>
                    </div>

                    <div class={classes.serviceCard}>
                        <h3>Click and Collect</h3>

                        <p>Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
                    </div>

                    <div class={classes.serviceCard}>
                        <h3>Conception Service</h3>

                        <p>Personalized service with an expert advisor for your interior and exterior decoration or
                            layout
                            projects. </p>
                    </div>

                    <div class={classes.serviceCard}>
                        <h3>Installation Service</h3>

                        <p>Our furniture packaged in flat packs are designed for easy assembly. But you can call on our
                            partner.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;