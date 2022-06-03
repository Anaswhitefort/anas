import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';

const Layout = ({ seo, headerClassName, headerTheme, headerShowThemeButton, children }) => {
  const headerRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOutsideClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleHeaderBurgerClick = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <>
      <SEO {...seo} />
      <div className="flex min-h-screen flex-col">
        <Header
          className={headerClassName}
          theme={headerTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          ref={headerRef}
          showThemeButton={headerShowThemeButton}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          headerRef={headerRef}
          onOutsideClick={handleMobileMenuOutsideClick}
        />
      </div>
    </>
  );
};

Layout.propTypes = {
  seo: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    ogImage: PropTypes.string,
    canonicalUrl: PropTypes.string,
  }),
  headerClassName: PropTypes.string,
  headerTheme: PropTypes.oneOf(['black', 'white']).isRequired,
  headerShowThemeButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  seo: {},
  headerClassName: null,
  headerShowThemeButton: false,
};

export default Layout;
