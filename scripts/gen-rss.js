const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')

async function generate() {
  const posts = await fs.readdir(path.join(__dirname, '..', 'pages', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return

      const content = await fs.readFile(
        path.join(__dirname, '..', 'pages', 'posts', name)
      )
      const frontmatter = matter(content)
    })
  )
}

generate()
