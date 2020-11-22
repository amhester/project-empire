import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import { TextField, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './index.module.scss'

const CustomTextField = withStyles({
  root: {
    marginBottom: '1rem',
    '& label': {
      fontSize: '2rem'
    },
    '& label.Mui-focused': {
      fontSize: '1rem'
    },
    '& .MuiInputLabel-shrink': {
      fontSize: '1rem'
    },
    '& input': {
      fontSize: '2rem !important'
    }
  }
})(TextField)

export default function Home() {
  const router = useRouter()

  const [code, setCode] = useState('')

  const onCodeChange = useCallback((e) => {
    setCode(e.target.value)
  }, [])

  const onEnterPress = useCallback((e) => {
    if (e.key === 'Enter') {
      router.push(`/game?code=${code}`)
    }
  }, [code])

  const onCodeEnter = useCallback(() => {
    router.push(`/game?code=${code}`)
  }, [code])

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
          Welcome to Elements of the Empire
        </h1>

        <div className={styles.enterCode}>
          <CustomTextField label="Enter Beta Code" value={code} onChange={onCodeChange} fullWidth inputProps={{ onKeyPress: onEnterPress }} />
          <Button variant="contained" color="primary" onClick={onCodeEnter} size="large">Enter</Button>
        </div>
      </main>
    </div>
  )
}
