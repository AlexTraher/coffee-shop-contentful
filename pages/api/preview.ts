import { NextApiHandler } from 'next'

const preview: NextApiHandler = async (req, res) => {
  const { secret } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }


  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = '/'
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  )
  res.end()
}

export default preview;