import Head from 'next/head'
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
      fontSize: '1rem',
    },
    '& input': {
      fontSize: '2rem !important'
    }
  }
})(TextField)

const codeVerificationURL = '/api/verify_code'

export default function Home() {
  const [code, setCode] = useState('')

  const onCodeChange = useCallback((e) => {
    setCode(e.target.value)
  }, [])

  const onCodeEnter = useCallback(() => {
    fetch(`${codeVerificationURL}?code=${code}`).then((res) => {
      if (res.status === 200) {
        console.log('we cool')
      }
    })
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
          <CustomTextField label="Enter Beta Code" value={code} onChange={onCodeChange} fullWidth />
          <Button variant="contained" color="primary" onClick={onCodeEnter} size="large">Enter</Button>
        </div>
      </main>
    </div>
  )
}
