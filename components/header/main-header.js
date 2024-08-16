import Link from 'next/link';
import logo from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import Image from 'next/image';
import NavLink from './navLink';

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
