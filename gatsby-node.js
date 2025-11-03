const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Erro ao carregar posts Markdown`, result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.frontmatter.slug}/`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};