import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NFY from '../public/nfy4.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <NFY />
    </div>
  );
}
