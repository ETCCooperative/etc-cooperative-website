import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, StaticQuery } from 'gatsby';
import Link from 'gatsby-theme-sky-lite/src/components/Link';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.grey[900],
    '& a': {
      color: theme.palette.grey[300],
      textDecoration: 'none',
      fontSize: '.9rem',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& ul': {
      padding: 0,
      listStyle: 'none',
    },
    '& li': {
      marginBottom: theme.spacing(0.5),
    },
  },
}));

const FooterColumns = ({ columns }) => {
  // keeps all the elements for a single column
  let singleColumnElements = [];

  return (
    <Grid container spacing={2}>
      {columns.reduce((cols, { heading, lastColumnItem = true, links }) => {
        singleColumnElements = [
          ...singleColumnElements,
          <Fragment key={heading}>
            <Typography style={{ fontWeight: 'bold' }}>{heading}</Typography>
            <ul>
              {links.map((link) => {
                let content = link.title;

                // check if it's an image link
                if (!!link.image) {
                  content = (
                    <img src={link.image} alt={link.title} width={120} />
                  );
                }

                return (
                  <li key={link.title}>
                    <Link to={link.url}>{content}</Link>
                  </li>
                );
              })}
            </ul>
          </Fragment>,
        ];

        if (lastColumnItem) {
          cols.push(
            <Grid xs={12} sm={4} item key={heading}>
              {singleColumnElements}
            </Grid>
          );
          singleColumnElements = [];
        }

        return cols;
      }, [])}
    </Grid>
  );
};

export default () => {
  const classes = useStyles();

  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              components {
                footer {
                  columns {
                    heading
                    lastColumnItem
                    links {
                      title
                      image
                      url
                    }
                  }
                  copyright
                }
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: {
            components: {
              footer: { columns, copyright },
            },
          },
        },
      }) => {
        return (
          <Box component="footer" className={classes.footer}>
            <Container maxWidth="md">
              <Box padding={4}>
                <FooterColumns columns={columns} />
                <Box textAlign="center" marginTop={2}>
                  <Typography variant="caption">
                    &copy; {new Date().getFullYear()} {copyright}
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        );
      }}
    />
  );
};
