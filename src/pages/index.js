import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ArticleCard from "../components/ArticleCard";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <section>
        <h1>Últimas publicações</h1>
        <p>
          Esta é a home do projeto Jamstack com Gatsby. Abaixo estão os últimos
          posts gerados a partir de Markdown.
        </p>
        {posts.map((post) => (
          <ArticleCard
            key={post.frontmatter.slug}
            slug={post.frontmatter.slug}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
          />
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      limit: 20
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          slug
        }
        excerpt(pruneLength: 140)
      }
    }
  }
`;

export const Head = () => (
  <Seo title="Home - Blog Jamstack do Roberto" description="Lista dos últimos posts publicados" />
);

export default IndexPage;