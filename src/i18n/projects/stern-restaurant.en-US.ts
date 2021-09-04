const name = 'stern-restaurant';
const title = 'Stern restaurant';
const location = 'Yekaterinburg';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/stern.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
        size: 850,
        year: 2012,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/stern_1.jpg`
            },
            {
                src: `/content/projects/${name}/stern_2.jpg`
            },
            {
                src: `/content/projects/${name}/stern_3.jpg`
            },
            {
                src: `/content/projects/${name}/stern_4.jpg`
            },
            {
                src: `/content/projects/${name}/stern_6.jpg`
            },
            {
                src: `/content/projects/${name}/stern_7.jpg`
            },
            {
                src: `/content/projects/${name}/stern_8.jpg`
            },
            {
                src: `/content/projects/${name}/stern_9.jpg`
            },
            {
                src: `/content/projects/${name}/stern_10.jpg`
            },
            {
                src: `/content/projects/${name}/stern_11.jpg`
            },
        ],
    }
}
