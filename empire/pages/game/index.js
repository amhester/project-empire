import { useCallback, useState, useEffect } from 'react'
import { debounce } from 'debounce'
import { TextField } from '@material-ui/core'
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
  const [username, setUsername] = useState('')

  useEffect(() => {
    const name = window.localStorage.getItem('empire:username')
    setUsername(name)
  }, [])

  const persistUsername = useCallback(debounce((e) => {
    window.localStorage.setItem('empire:username', e.target.value)
  }, 200), [])

  const onUsernameChange = useCallback((e) => {
    setUsername(e.target.value)
    persistUsername(e)
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h2>Enter a username</h2>
          <TextField value={username} onChange={onUsernameChange} label="username" fullWidth />
        </div>
      </main>
    </div>
  )
}
