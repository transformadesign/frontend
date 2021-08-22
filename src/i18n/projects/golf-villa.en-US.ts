const name = 'golf-villa';
const title = 'Golf Villa';
const country = 'Kazakhstan';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/1_View09.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${country}`
        },
        name,
        title,
        country,
        images: [
            {
                src: `/content/projects/${name}/1_View09.jpg`
            }
        ],
    }
}
