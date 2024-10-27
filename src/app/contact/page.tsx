import Header from "@/app/header"
import styles from "@/styles/contact.module.css";
import Link from "next/link";

export default function Contact(){
    return(
    
           <main>
            <Header/>
            <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>
          Get in <span className={styles.highlight}>touch</span>
        </h2>
        <p className={styles.description}>
         Enter Your Details
        </p>
        
        <form>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First Name" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Last Name" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email Address" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" placeholder="Phone Number" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <textarea placeholder="Message" required className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
           </main>
    )
}