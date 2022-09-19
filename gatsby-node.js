module.exports = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadataComponentsFooterColumns {
      # lastColumnItems: is a not so nice addition in gatsby-config for allowing us to define mupltiple rows per column
      lastColumnItem: Boolean
    }

    type SiteSiteMetadataComponentsFooterColumnsLinks {
      image: String
    }
  `;

  createTypes(typeDefs);
};
