import styles from '@/styles/header.module.css';
import Link from "next/link";



export default function Header() {
  return (
    <main>
      <header>
        <nav>
          <div className={styles.head}>
            <div className={styles.name}>Muhammad Dawood Butt.</div>
            <ul>
              <li className={styles.links}>
                <Link className={styles.home} href="/">
                  Home
                </Link>
                <Link href="/about">About</Link>
                
                <Link href="/contact" passHref>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <p className={styles.txt}>HIRE ME</p>
          </div>
        </nav>
        
      </header>
    </main>
  );
}

