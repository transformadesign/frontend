import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getMain, Main, getConfig, Config, getPage, Page as TPage, PreviewData } from '../../lib/api';
import { getStaticI18nPaths, getStaticI18nProps, Lang, contentLanguageMap } from '../../lib/i18n';

import Layout from '../../components/layout';
import HtmlHeader from '../../components/html_header';
import Contacts from '../../components/contacts';
import HtmlClients from '../../components/html_clients';

export default function About(props: Props) {
    const { main, config } = props;

    return (
        <>
            <Layout type="main" alternates={main?._meta.alternateLanguages} {...props}>
                <Head>
                    <title>TF</title>
                </Head>
                <HtmlHeader />

                <section className="section p-t-100 p-b-65">
                    <div className="container">
                        <div className="page-heading">
                            <h4 className="title-sub title-sub--c8 m-b-15">we are transforma</h4>
                            <h2 className="title-2">XXI LUXURY INTERIOR & ARCHITECTURE</h2>
                            <p>
                                Transforma is an architecture and interior design studio for luxury villas, residences,
                                public spaces and business apartments.
                            </p>
                            <p>
                                We bid defiance to the habitual notions of luxurity, exclusivity and high style and
                                bring our art up through the verge of achievable. We do things that become believable
                                only because they were once realised.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="wrap wrap--w1790">
                        <div className="container-fluid">
                            <img src="/images/about-00.jpg" alt="Page Image" />
                        </div>
                    </div>
                </section>

                <section className="section p-t-80">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="row no-gutters">
                                    <div className="col-md-6">
                                        <div className="media-statistic-2">
                                            <div className="media__body">
                                                <span className="media__number js-counterup">360</span>
                                                <h5 className="media__title title-sub">
                                                    Days of brainstorming sessions a year
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media-statistic-2">
                                            <div className="media__body">
                                                <span className="media__number js-counterup">150</span>
                                                <h5 className="media__title title-sub">
                                                    Completed projects in style &apos;de luxe&apos;
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media-statistic-2">
                                            <div className="media__body">
                                                <span className="media__number js-counterup">23</span>
                                                <h5 className="media__title title-sub">
                                                    Professionals who turn ideas into fine arts
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media-statistic-2">
                                            <div className="media__body">
                                                <span className="media__number js-counterup">20</span>
                                                <h5 className="media__title title-sub">
                                                    Cities around the world where our ideas were embodied
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="text--s18-40 m-b-15">
                                    <strong className="text--c2">A skillful team </strong>
                                    of professionals shares the values and beliefs of the company and acts heart to
                                    heart achieving the set goals. We develop and implement projects of any scale and
                                    complexity.
                                </p>
                                <p className="text--s18-40">
                                    <strong className="text--c2"> The only figure </strong>
                                    in this list that one cannot influence is the number of days in a year. The others
                                    are a matter of growth. We are ready to accept talented men and women in our team to
                                    discover new cities and countries, and, of course, to increase the portfolio of new
                                    projects
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-t-60 p-b-60">
                    <div className="container">
                        <div className="section-title">
                            <h5 className="title-sub">what we do</h5>
                            <h2 className="title-1">Our specilization</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">INTERIOR DESIGN</a>
                                        </h3>
                                        <span className="number">01</span>
                                    </div>
                                    <p className="media__text">
                                        Developing an image of living spaces unique in aesthetics and functionality, our
                                        designers are not bound in the frames of one style. We revise patterns of
                                        different countries and ages, striving for a holistic, complete and sometimes
                                        unexpected view.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">OUTER SPACES</a>
                                        </h3>
                                        <span className="number">02</span>
                                    </div>
                                    <p className="media__text">
                                        Noble high-class hotels, business centers and resorts deluxe are the places
                                        where the secret code is hidden. Designing projects for public spaces, in search
                                        of a fresh look we take the position of uncompromising perfectionism, and
                                        integrate fine arts to &apos;just a miracle&apos;.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">ARCHITECTURE</a>
                                        </h3>
                                        <span className="number">03</span>
                                    </div>
                                    <p className="media__text">
                                        The best result can be guaranteed when the customer and architect have the same
                                        viewpoint. We strive to see the future project through the eyes of the customer
                                        ... and fulfill the space with our vision based on a variety of architectural
                                        styles and techniques.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">FF&E DESIGN</a>
                                        </h3>
                                        <span className="number">04</span>
                                    </div>
                                    <p className="media__text">
                                        The pinnacle of &quot;style de luxe&quot; lies in Italy. Having contracts with
                                        the legislators of furniture and interior fashion, we supply from here exclusive
                                        details that by no retail or an auction, and by no dealers can be obtained, but
                                        only straight from the manufacturer.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section bg-pattern-tf p-t-60 p-b-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-9">
                                <div className="service-wrap mb-8 text-white px-8 py-6 bg-black">
                                    We believe that success lies in being obsessed by ideas enthrilling all people
                                    involved in the project. The team does not change for years, we feel and understand
                                    each other perfectly, pick up and develop all the ideas which are crazy enough to be
                                    brilliant.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-t-60 p-b-60">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="title-1">Philosophy &apos;de luxe&apos;</h2>
                            <p>
                                The company&apos;s philosophy is based on four &quot;transformation points&quot;. They
                                are: challenge, specialization, service, individualism.
                            </p>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">Challenge</a>
                                        </h3>
                                        <span className="number" />
                                    </div>
                                    <p className="media__text">
                                        Our design and architecture is always a challenge. We find and carry out ideas
                                        and images that were in no existence before. We give life to daring ideas,
                                        unrealizable at first glance. For them we compose a solution and think over the
                                        technical implementation. And then invite the best performer, no matter how
                                        expensive it could be, and what country he is living in.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">Specialization</a>
                                        </h3>
                                        <span className="number" />
                                    </div>
                                    <p className="media__text">
                                        We are constantly focused on only one activity. This is our profile, our life,
                                        our passion. Knowledge and experience of each member and of the entire team
                                        opens the door to exceptional results.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">Service</a>
                                        </h3>
                                        <span className="number" />
                                    </div>
                                    <p className="media__text">
                                        To ensure architectural supervision of all objects, we have organized 24-hour
                                        information support for our customers. In any timezone, at any time of day or
                                        night, you can phone and get a detailed report on how the process is going on.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <article className="media media-service">
                                    <div className="media__title">
                                        <h3 className="title">
                                            <a href="#">Individualism</a>
                                        </h3>
                                        <span className="number" />
                                    </div>
                                    <p className="media__text">
                                        Each project born and brought to perfection in our studio is an anthem to
                                        individualism recorded in form and space. The keynote is lifestyle and picture
                                        of the world of the customer. And of course the elements complementing and
                                        completing this picture.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <HtmlClients />

                <section className="p-t-60 p-b-60">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="title-1">In Style of TRANSFORMAtion</h2>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-6 col-lg-6">
                                <span className="number" />
                                <article className="media media-service">
                                    <p className="media__text">
                                        Implementing all famous styles and techniques in architecture and design, we do
                                        not dwell on impressive sketches. We go further and bring any project to its
                                        best completion. Our credo is to find new ideas and create on the edge of
                                        tradition and modernity, fantasy and reality, art and technology.
                                    </p>
                                </article>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <span className="number" />
                                <article className="media media-service">
                                    <p className="media__text">
                                        The headquarters of the company is in Italy. From here to any point of the globe
                                        we export high technologies of architecture and design, pieces of furniture art,
                                        interior and decor. And that&apos;s not all: the project of any complexity will
                                        be implemented anywhere in the world. We transfer ideas, projects and control
                                        the process.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="rec316851801" className="r t-rec" data-animationappear="off" data-record-type="18">
                    <div
                        className="relative"
                        style={{
                            height: '60vh',
                            backgroundImage: 'linear-gradient(top, #ccc, #777)'
                        }}
                    >
                        <div
                            className="overflow-hidden"
                            style={{
                                height: '60vh',
                                backgroundColor: 'rgb(0, 0, 0)'
                            }}
                        >
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/HFs1up00mtg?autoplay=1&loop=1&controls=0&color=white&theme=light&playlist=HFs1up00mtg?&mute=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&&playerapiid=featuredytplayer&wmode=transparent&iv_load_policy=3&origin=https://transforma.ru"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{
                                    height: '1165px',
                                    marginTop: '-314px',
                                    width: '1680px'
                                }}
                            />
                        </div>
                        <div
                            className="absolute w-100 top-0"
                            style={{
                                height: '60vh',
                                backgroundImage: 'linear-gradient(0, rgba(0,0,0,0.70), rgba(0,0,0,0.70))',
                                filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#4c000000', endColorstr='#4c000000')"
                            }}
                        />
                    </div>
                </div>

                <Contacts config={config} />
            </Layout>
        </>
    );
}

type Params = {
    preview: boolean;
    previewData: PreviewData;
    params: { lang: Lang };
};
type Props = { preview: boolean; lang: Lang; main?: Main; page?: TPage; config: Config };
export const getStaticProps: GetStaticProps<Props> = async ({
    preview = false,
    previewData,
    params: { lang }
}: Params) => {
    const [config, main] = await Promise.all([
        getConfig(previewData, { locale: contentLanguageMap[lang] }),
        getMain(previewData, { locale: contentLanguageMap[lang] })
    ]);

    return {
        ...(await getStaticI18nProps({ preview, main, config, lang })),
        revalidate: false
    };
};

export const getStaticPaths: GetStaticPaths = async () => getStaticI18nPaths({ paths: ['/about'] });
