import styles from "./Certifications.module.css"
import React from 'react'

import {certificates, Certificate} from "../../json-datas/certifications-data"

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          [ cat certifications/* ]
        </h2>
        
        <div className={styles.certList}>
          <div className={styles.directory}>certifications/</div>
         
          <ul>
            {certificates.map((cert:Certificate) => (
            <li key={index}>
                {cert.certificate}
                <span className="blinking-cursor"></span>
            </li>
          ))}
          </ul>
          <button className={styles.viewAllBtn}>
            [ ls all_Certifications ]
          </button>
        </div>
      </div>
    </section>
  )
}


//{certifications.map((cert, index) => (
            //  <li key={index}>
            //    {cert}
            //    <span className="blinking-cursor"></span>
           //   </li>
         //   ))}