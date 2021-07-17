import React, { useContext } from 'react';
import Link from 'next/link';

import { classNames } from '../lib/class-names';
import { buildUrl } from '../lib/url-builder';
import { Context } from '../context/main';

const Menu: React.FC<{ className?: string }> = ({ className }) => {
    const { lang } = useContext(Context);

    return (
        <ul className={classNames('menu nav-menu', className)}>
            <li className="menu-item">
                <Link {...buildUrl('main', lang)}>
                    <a>Home</a>
                </Link>
            </li>
            <li className="menu-item">
                <Link {...buildUrl('about', lang)}>
                    <a>About</a>
                </Link>
            </li>
            <li className="menu-item">
                <Link {...buildUrl('projects', lang)}>
                    <a>Projects</a>
                </Link>
            </li>
            <li className="menu-item">
                <a href="#contact">contact</a>
            </li>
        </ul>
    );
};

const HtmlHeader: React.FC = () => {
    const { lang } = useContext(Context);

    return (
        <header id="header">
            <div className="header header-1 d-none d-lg-block js-header-1">
                <div className="header__bar">
                    <div className="container">
                        <div className="header__content">
                            <div className="logo">
                                <Link {...buildUrl('main', lang)}>
                                    <a>
                                        <img src="/logo_large_black.svg" alt="Tatee" width="140" />
                                    </a>
                                </Link>
                            </div>
                            <div className="header__content-right">
                                <nav className="header-nav-menu">
                                    <Menu />
                                </nav>
                                <div className="header-social">
                                    <ul className="list-social">
                                        <li className="list-social__item">
                                            <a className="ic-fb" href="#">
                                                <i className="zmdi zmdi-facebook" />
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-insta" href="#">
                                                <i className="zmdi zmdi-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-twi" href="#">
                                                <i className="zmdi zmdi-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-pinterest" href="#">
                                                <i className="zmdi zmdi-pinterest" />
                                            </a>
                                        </li>
                                        <li className="list-social__item">
                                            <a className="ic-google" href="#">
                                                <i className="zmdi zmdi-google" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid">
                        <div className="header-mobile__bar-inner">
                            <Link {...buildUrl('main', lang)}>
                                <a>
                                    <img src="/logo.svg" alt="Tatee" width="40" />
                                </a>
                            </Link>
                            <button className="hamburger hamburger--slider float-right" type="button">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="header-nav-menu-mobile">
                    <div className="container-fluid">
                        <Menu className="menu-mobile" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HtmlHeader;
