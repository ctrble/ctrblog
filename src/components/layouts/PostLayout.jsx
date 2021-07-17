import React from 'react';
import PropTypes from 'prop-types';

import LatestPosts from 'src/components/LatestPosts';

const PostLayout = ({ children }) => (
  <>
    <LatestPosts count={5} />
    {children}
  </>
);

PostLayout.propTypes = {
  children: PropTypes.node,
};

PostLayout.defaultProps = {
  children: null,
};

export default PostLayout;
