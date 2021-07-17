import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Code from 'src/components/elements/Code';
import Image from 'src/components/elements/Image';
import SiteLink from 'src/components/elements/SiteLink';

import styles from './MarkdownContent.module.scss';

const ParagraphOrImage = (props) => {
  // disable linters cause this is a dirty hack
  /* eslint-disable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
  const element = props.children[0];

  /**
   * The react-markdown package nests images in paragraphs, which is not valid
   * html. This instead strips out the p tags and sends the image to LazyImage
   * to take it from there.
   */
  // workaround: https://github.com/rexxars/react-markdown/issues/184#issuecomment-522491275
  return element.type === 'img' ? (
    <Image key={element.key} src={element.props.src} alt={element.props.alt} />
  ) : (
    <p {...props} />
  );
  /* eslint-enable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
};

const MarkdownContent = ({ content }) => (
  <div className={styles.markdownContent}>
    <ReactMarkdown
      /* eslint-disable react/display-name, react/jsx-props-no-spreading, react/prop-types */
      components={{
        a: ({ node, children, href, ...props }) => (
          <SiteLink href={href} {...props}>
            {children}
          </SiteLink>
        ),
        p: ({ node, ...props }) => <ParagraphOrImage {...props} />,
        code: ({ node, className, inline, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return (
            <Code
              inline={inline}
              language={match && match.length > 1 ? match[1] : undefined}
              value={String(children).replace(/\n$/, '')}
              {...props}
            />
          );
        },
      }}
      /* eslint-enable react/display-name, react/jsx-props-no-spreading, react/prop-types */
    >
      {content}
    </ReactMarkdown>
  </div>
);

MarkdownContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownContent;
