import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from "../components/nav-bar"
import BlogPostCard from "../components/blog-post-card"
import { VStack } from "@chakra-ui/layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <VStack spacing={3}>

          {
            posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const description = post.frontmatter.description || 'fallback'

              return (
                <BlogPostCard title={title} description={description} date={post.frontmatter.date} link={post.fields.slug} />
              )
            })
          }
        </VStack>

      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
