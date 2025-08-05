import Link from 'next/link';
import styles from './Writeups.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.terminalHeader}>
        <div className={styles.promptLine}>
          <span className={styles.promptSymbol}>user@cybersecurity:~$</span>
          <span className={styles.promptCommand}>cat writeup-not-found.txt</span>
        </div>
      </div>
      
      <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>404: Writeup Not Found</h1>
        <p className={styles.errorMessage}>
          The writeup you're looking for doesn't exist or has been removed.
        </p>
        
        <div className={styles.errorSuggestions}>
          <p>Possible reasons:</p>
          <ul>
            <li>The writeup was deleted</li>
            <li>The URL is incorrect</li>
            <li>The writeup hasn't been published yet</li>
          </ul>
        </div>
        
        <Link href="/writeups" className={styles.homeLink}>
          ← Return to Writeups List
        </Link>
      </div>
    </div>
  );
}