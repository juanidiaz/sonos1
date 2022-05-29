import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  // const client_id = "YourAPIKeyGoesHEre"
  const client_id = process.env.SONOS_KEY;
  const response_type = "code";
  const state = "testState";
  const scope = "playback-control-all";
  const redirect_uri = "https%3A%2F%2Facme.example.com%2Flogin%2Ftestclient%2Fauthorized.html";

  const url = `https://api.sonos.com/login/v3/oauth?client_id=${client_id}?response_type=${response_type}?state=${state}?scope=${scope}?redirect_uri=${redirect_uri}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href={url}>
          HERE
        </Link>

        <button
          onClick={`location.href='${url}'`}
          type="button">
          Sign in with Sonos
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
