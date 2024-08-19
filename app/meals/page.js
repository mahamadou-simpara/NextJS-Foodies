import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meal-grid/meal-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, creeated
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yoursefl, It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals....</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
