import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.NODE_ENV !== 'development') {
    res.status(404).send('Not found')
    return
  }

  if (req.method === 'POST') {
    const { content } = req.body

    // The path to the MDX file
    const filePath = path.join(process.cwd(), 'path', 'to', 'your', 'file.mdx')

    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Parse the frontmatter and the content
    const { data } = matter(fileContents)

    // Stringify the new frontmatter and the content
    const newFileContents = matter.stringify(content, data)

    // Write the file back to the disk
    fs.writeFileSync(filePath, newFileContents)

    res.status(200).send('File updated')
  } else {
    res.status(405).send('Method not allowed')
  }
}
