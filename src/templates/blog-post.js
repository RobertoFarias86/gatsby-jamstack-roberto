import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const image = post.frontmatter.featuredImage
    ? getImage(post.frontmatter.featuredImage)
    : null;

  return (
    <Layout>
      <article className="card">
        <h1>{post.frontmatter.title}</h1>
        <p className="muted">{post.frontmatter.date}</p>
        {image && (
          <GatsbyImage
            image={image}
            alt={post.frontmatter.title}
            style={{ borderRadius: "0.75rem", marginBottom: "1rem" }}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 900)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo
    title={data.markdownRemark.frontmatter.title}
    description={data.markdownRemark.excerpt}
  />
);

export default BlogPostTemplate;