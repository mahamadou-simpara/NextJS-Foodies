import Link from 'next/link';
import logo from '@/assets/logo.png';
import classes from './mian-header.module.css';
import MainHeaderBackground from './main-header-background';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="A plate with food on it" priority/>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
