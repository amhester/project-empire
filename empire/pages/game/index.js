import Head from 'next/head'
import styles from './game.module.scss'

const verifiedCode = 'dQbOxX0ZZEKDnA4LRUJoKQ=='

export async function getServerSideProps(context) {
  const { query = {}, __NEXT_INIT_QUERY = {} } = context.req
  const { code = '' } = __NEXT_INIT_QUERY

  if (code !== verifiedCode) {
    return {
      notFound: true,
    }
  }
  return {
    props: {},
  }
}

export default function Game() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Empire</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a Game
        </h1>
      </main>
    </div>
  )
}
