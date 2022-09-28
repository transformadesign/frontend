const name = 'villa-emerald';
const title = 'Villa Emerald';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/_ART0078-Edit.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
        size: 650,
        year: 2019,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/_ART0027T-Edit.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0078-Edit.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0193T.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0212T.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0215T-Edit.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0506T.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/_ART0569T-Edit.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0623T.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/_ART0626T.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/_ART0629T.jpg`
            },
            {
                src: `/content/projects/${name}/_ART0641T.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/_ART0650T.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/_ART0734T.jpg`
            },
            {
                src: `/content/projects/${name}/_ART1015T-Edit.jpg`
            },
            {
                src: `/content/projects/${name}/_DSF0008T-Edit.jpg`
            },
        ],
    }
}
