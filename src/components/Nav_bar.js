import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav_bar.module.css';
import '../styles/hamburger.css'
import nav_logo from '../assets/Indian_Institute_of_Technology,_Jammu_Logo.png';



function Nav_bar() {
  return (
    <nav className={styles['nav']}>
      <div className={styles['logo']} style={{ backgroundImage: `url('${nav_logo}')` }}>
        <Link to="/"></Link>
      </div>
      <div id="nav-menu" className={styles['nav-menu']}>
        <div className={styles['obj']}><Link to="/">Home</Link></div>
        <div className={styles['obj']}><Link to="/about">About</Link></div>
        <div className={styles['obj']}><Link to="/activity">Activities</Link></div>
        <div className={`${styles['obj']} ${styles['drop']}`}>
          <Link to="/research">Research
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link to="/collaboration">Collaboration</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
          </ul>
        </div>
        <div className={`${styles['obj']} ${styles['drop']}`}>
          <Link to="/members">Members
            <div>
              <div className={styles['arrow']}></div>
            </div>
          </Link>
          <ul>
            <li><Link to="/ug">UG</Link></li>
            <li><Link to="/pg">PG</Link></li>
            <li><Link to="/PhD">PHD</Link></li>
            <li><Link to="/Intern">Intern</Link></li>
          </ul>
        </div>
        <div className={styles['obj']}><Link to="/news">News</Link></div>
        <div className={styles['obj']}><Link to="/publication">Publications</Link></div>
        <div className={styles['obj']}><Link to="/contact">Contact</Link></div>
        <div className={styles['indic']}></div>
      </div>
      <button className="hamburger hamburger--elastic" id="hamburgerButton" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
}

export default Nav_bar;