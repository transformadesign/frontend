const name = 'villa-spa';
const title = 'Villa SPA';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/villa-spa.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
        size: 670,
        year: 2021,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/SPA_View01.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View03.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View04.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View07.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View13.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View15.jpg`
            },
            {
                src: `/content/projects/${name}/SPA_View17.jpg`
            },
            {
                src: `/content/projects/${name}/SPA2_View02.jpg`
            },
            {
                src: `/content/projects/${name}/SPA2_View03.jpg`
            },
            {
                src: `/content/projects/${name}/SPA3_View03.jpg`
            },
        ],
    }
}
