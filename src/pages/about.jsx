import React from 'react';
import PropTypes from 'prop-types';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Content from 'src/components/content/Content';
import Body from 'src/components/Body';

const About = ({ about }) => (
  <>
    {about && about.length ? (
      about.map(({ frontmatter, content }) => (
        <Content
          key={frontmatter.title}
          title={frontmatter.title}
          description={frontmatter.description}
          content={content}
        />
      ))
    ) : (
      <Body>
        <p>Sorry, nothing to see here!</p>
      </Body>
    )}
  </>
);

export async function getStaticProps() {
  const about = directoryContent('about');

  return {
    props: {
      about,
    },
  };
}

/* eslint-disable react/display-name */
About.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
/* eslint-enable react/display-name */

About.propTypes = {
  about: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
};

About.defaultProps = {
  about: null,
};

export default About;
