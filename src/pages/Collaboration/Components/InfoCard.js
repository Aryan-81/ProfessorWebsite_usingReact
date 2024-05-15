import React from 'react';
import default_img from '../../../assets/unknownman.png';
import styles from './InfoCard.module.css'

function Card({ profileimg = default_img, name = 'unknown', ResearchArea = 'Lorem ipsum is interested in xygc jbsd jbc  hsd jbsn j dc bu s  js  jbscbsjc jbsjbjsb' }) {
    return (
        <div className={styles["container"]}>
            <div className={styles["card"]}>
                <img src={profileimg} style={{ height: '100%' }} alt="Profile" />

                <div className={styles["card-body"]}>
                    <div className={styles["card-text"]}>
                        <h3>{name}</h3>
                        <p>
                            DEPARTMENT
                            <br/><br/>
                            <b>RESEARCH AREA</b>
                            <br/>
                            {ResearchArea}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
