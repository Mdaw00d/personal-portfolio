import styles from '@/styles/header.module.css';
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  return (
    <main>
<Sheet>
  <SheetTrigger className={styles.sidebar}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="/>
  </SheetTrigger>

  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    <nav className="flex flex-col space-y-4 p-4 text-lg">
      <a href="/" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </nav>
  </SheetContent>
</Sheet>


      <header>
        <nav>
          <div className={styles.head}>
            <div className={styles.name}>Muhammad Dawood Butt.</div>
            <ul>
              <li className={styles.links} >
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
            <div className='sm:hidden md:block bg-white'></div>
          </div>
        </nav>
         
      </header>
    </main>
  );
}

