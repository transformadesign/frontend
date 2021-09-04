const name = 'kozikhinsky-apt';
const title = 'Apartment at Kozikhinsky';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/ap_kozikh.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
        size: 800,
        year: 2021,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/Ap_kozikh_1.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_2.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_3.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_4.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_5.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_6.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_7.jpg`
            },
        ],
    }
}
