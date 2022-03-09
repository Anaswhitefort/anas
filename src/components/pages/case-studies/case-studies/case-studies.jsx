import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import { CASE_STUDIES_BASE_PATH } from 'constants/case-studies';

const CaseStudies = ({ items }) => (
  <section className="safe-paddings mt-32 lg:mt-28 md:mt-24 sm:mt-16">
    <div className="container space-y-40 lg:space-y-32 md:space-y-28 sm:space-y-20">
      {items.map(({ slug, frontmatter: { logo, title, description, quote, cover } }, index) => (
        <article
          className="grid-gap-x grid grid-cols-2 items-center md:flex md:flex-col md:items-stretch"
          key={index}
        >
          <div className="md:mt-6">
            <h1 className="sr-only">{`${title} case study`}</h1>
            <img className="invert" src={logo.publicURL} alt={`${title} logo`} loading="lazy" />
            <p className="mt-4 font-normal leading-snug md:mt-2.5">{description}</p>
            <figure className="mt-5 border-t border-t-gray-4 pt-5 md:mt-3.5 md:pt-3.5">
              <blockquote>
                <p>{quote.text}</p>
              </blockquote>
              <figcaption className="mt-3 flex items-center md:mt-2.5">
                <GatsbyImage
                  className="w-10 shrink-0 rounded-full"
                  imgClassName="rounded-full"
                  image={getImage(quote.authorPhoto)}
                  alt={quote.authorName}
                  loading="lazy"
                />
                <span className="ml-3.5 text-base font-normal md:ml-2.5">
                  {quote.authorName} — {quote.authorPosition}
                </span>
              </figcaption>
            </figure>
            <Link
              className="mt-8 md:mt-4"
              to={`${CASE_STUDIES_BASE_PATH}/${slug}`}
              size="base"
              theme="arrow-red"
            >
              {title} case study
            </Link>
          </div>
          <Link
            className="md:order-first"
            to={`${CASE_STUDIES_BASE_PATH}/${slug}`}
            aria-label={`${title} case study`}
          >
            <GatsbyImage
              className="w-full rounded-2xl lg:rounded-xl md:rounded-lg sm:rounded-md xs:rounded"
              imgClassName="rounded-2xl lg:rounded-xl md:rounded-lg sm:rounded-md xs:rounded"
              image={getImage(cover)}
              alt={`${title} website`}
              loading="lazy"
            />
          </Link>
        </article>
      ))}
    </div>
  </section>
);

CaseStudies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      slug: PropTypes.string.isRequired,
      frontmatter: PropTypes.exact({
        logo: PropTypes.exact({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        quote: PropTypes.exact({
          text: PropTypes.string.isRequired,
          authorName: PropTypes.string.isRequired,
          authorPosition: PropTypes.string.isRequired,
          authorPhoto: PropTypes.exact({
            childImageSharp: PropTypes.exact({
              gatsbyImageData: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
        cover: PropTypes.exact({
          childImageSharp: PropTypes.exact({
            gatsbyImageData: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default CaseStudies;