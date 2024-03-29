import React from 'react';
import PropTypes from 'prop-types';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import PageHeader from 'src/components/PageHeader';
import MarkdownContent from 'src/components/MarkdownContent';
import Body from 'src/components/elements/Body';

const About = ({ about }) => (
  <>
    {about && about.length ? (
      about.map(({ frontmatter, content }) => (
        <React.Fragment key={frontmatter.date.toString()}>
          <PageHeader
            title={frontmatter.title}
            description={frontmatter.description}
          />
          <MarkdownContent content={content} />
        </React.Fragment>
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
