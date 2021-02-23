import React from 'react';
import PropTypes from 'prop-types';

import { fileContent, directorySlugs } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import PostLayout from 'src/components/layouts/PostLayout';
import Post from 'src/components/post/Post';

const Slug = ({ post }) => (
  <Post
    title={post.frontmatter.title}
    date={post.frontmatter.date}
    description={post.frontmatter.description}
    content={post.content}
  />
);

export async function getStaticPaths() {
  const postSlugs = directorySlugs('posts');
  const paths = postSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = fileContent('posts', `${slug}.md`);

  return {
    props: {
      post,
    },
  };
}

/* eslint-disable react/display-name */
Slug.getLayout = (page) => (
  <SiteLayout>
    <PostLayout>{page}</PostLayout>
  </SiteLayout>
);
/* eslint-enable react/display-name */

Slug.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Slug;
