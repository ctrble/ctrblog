import React from 'react';
import PropTypes from 'prop-types';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Body from 'src/components/elements/Body';
import Excerpt from 'src/components/Excerpt';

const Home = ({ posts }) => (
  <>
    {posts && posts.length ? (
      posts.map(({ frontmatter, slug }) => (
        <Excerpt
          key={slug}
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          slug={slug}
        />
      ))
    ) : (
      <Body>
        <p>No posts yet!</p>
      </Body>
    )}
  </>
);

export async function getStaticProps() {
  const posts = directoryContent('posts');

  return {
    props: {
      posts,
    },
  };
}

/* eslint-disable react/display-name */
Home.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
/* eslint-enable react/display-name */

Home.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
};

Home.defaultProps = {
  posts: null,
};

export default Home;
