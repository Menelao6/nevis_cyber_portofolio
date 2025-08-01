import React from "react";
import styles from "./FeaturedWriteups.module.css"
import Link from "next/link"

import { writeups, Writeup} from "../../json-datas/FeaturedWriteups-data"

const FeaturedWriteups: React.FC = () => {
    return (
        <section className={styles.writeups}>
            <div className="container">
                <h2 className={styles.sectionTitle}>
                    user@cybersecurity:~/featured_write-ups$ ls
                </h2>
                <div className={styles.cards}>
                    {writeups.map((w:Writeup) => (
                        <div key={w.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>{w.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>{w.description}</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.date}>{w.date}</span>
                                <span className={styles.category}>{w.category}</span>
                                <Link href="/writeups">
                                  <button className={styles.readMore}>
                                  [ read more ]<span className="blinking-cursor"></span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default FeaturedWriteups
