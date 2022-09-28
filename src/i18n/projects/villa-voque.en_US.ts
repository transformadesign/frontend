const name = 'villa-voque';
const title = 'Villa Voque';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/villa20.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
        size: 750,
        year: 2020,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/148A2482.jpg`
            },
            {
                src: `/content/projects/${name}/carrat-16.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-4.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-5.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-8.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-12.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-13.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-16.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-17.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-19.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-21.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-23.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/villa-21-24.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-27.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-36.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-38.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-39-(1).jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-43.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-44.jpg`
            },
            {
                src: `/content/projects/${name}/villa-21-54.jpg`
            },
        ],
    }
}
