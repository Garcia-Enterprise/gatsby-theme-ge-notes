import { graphql } from 'gatsby'
import { NotePage } from '../components/NotePage'

export default NotePage

export const pageQuery = graphql`
  query NoteById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        emoji
        link
        modified(formatString: "LL")
        modifiedTimestamp: modified
      }
      fields {
        slug
      }
      tableOfContents(maxDepth: 3)
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
