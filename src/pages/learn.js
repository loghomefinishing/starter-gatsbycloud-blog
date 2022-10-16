import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allContentfulChinking.nodes.map(node => (
          <p key={node.title}>
            {node.title}<br></br>
            {node.createdAt}
          </p>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulChinking {
        nodes {
          createdAt
          title
        }
      }
  }
`



export default BlogPage
