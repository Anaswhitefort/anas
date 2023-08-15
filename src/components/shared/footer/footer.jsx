import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

const Footer = () => (
  <footer className="safe-paddings bg-black">
    <div className="container flex justify-between pb-14 pt-10 md:pt-0 sm:block sm:py-6">
      <div className="flex flex-col items-start justify-between">
        <Link to="/">
          <span className="sr-only">Anas Abdul Azeez</span>
          <Logo className="h-9" aria-hidden />
        </Link>
        <Link className="sm:hidden" to={LINKS.email} size="base" theme="underline-red">
          info@pixelpoint.io
        </Link>
      </div>
      <nav className="sm:grid-gap-x flex space-x-20 pt-2.5 sm:mt-10 sm:grid sm:grid-cols-2 sm:space-x-0 sm:pt-0">
        {MENUS.footer.map((links, index) => (
          <ul className="space-y-8 sm:hidden" key={index}>
            {links.map(({ to, text }, index) => (
              <li className="text-[0px]" key={index}>
                <Link to={to} size="base" theme="white">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        {MENUS.footerSm.map((links, index) => (
          <ul className="hidden space-y-6 sm:block" key={index}>
            {links.map(({ to, text }, index) => (
              <li className="text-[0px]" key={index}>
                <Link to={to} size="base" theme="white">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <Link
        className="hidden sm:mt-10 sm:inline-flex"
        to={LINKS.email}
        size="base"
        theme="underline-red"
      >
        info@pixelpoint.io
      </Link>
    </div>
  </footer>
);

export default Footer;
