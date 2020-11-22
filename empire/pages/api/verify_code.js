// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const verifiedCode = 'dQbOxX0ZZEKDnA4LRUJoKQ=='

export default (req, res) => {
  const { code = '' } = req.query
  if (code !== verifiedCode) {
    res.status(401).send('unauthorized')
    return
  }
  res.status(200).send('ok')
}
