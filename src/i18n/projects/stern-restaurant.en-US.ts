const name = 'stern-restaurant';
const title = 'Stern restaurant';
const location = 'Yekaterinburg';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/stern_1.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${location} – ${country}`
        },
        name,
        title,
        country,
        location,
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
