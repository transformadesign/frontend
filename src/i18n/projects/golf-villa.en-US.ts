const name = 'golf-villa';
const title = 'Golf Villa';
const country = 'Kazakhstan';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/golf-villa.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${country}`
        },
        name,
        title,
        country,
        size: 800,
        year: 2021,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/1_View09.jpg`
            }
        ],
    }
}
