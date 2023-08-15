export default {
  servicesWebDesign: {
    title: 'Web Design — Anas Abdul Azeez',
    description:
      'Get a stunning-looking website made by in-house team of motion, graphic, and web designers.',
  },
  servicesWebDevelopment: {
    title: 'Web Development — Anas Abdul Azeez',
    description:
      'Have a JAMStack powered web platform built with React, third parties, and integrations at your disposal.',
  },
  about: {
    title: 'About Us - Anas Abdul Azeez',
    description:
      'Learn the Anas Abdul Azeez origin and the team standing behind world-class marketing websites.',
  },
  blog: {
    title: 'Our Blog — Anas Abdul Azeez',
    description:
      'Collective team experience shared through articles, digests, and tutorials on web design and development.',
  },
  blogPost: ({ title, description, ogImage }) => ({
    title: `${title} — Anas Abdul Azeez`,
    description,
    ogImage,
  }),
  caseStudies: {
    title: 'Case Studies — Anas Abdul Azeez',
    description: 'See how we have helped our customers achieve their goals.',
  },
  caseStudy: ({ title, description }) => ({
    title: `${title} — Anas Abdul Azeez`,
    description,
  }),
};
