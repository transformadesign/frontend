const name = 'villa-2';
const title = 'Villa 2';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/villa-2.jpg`,
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
                src: `/content/projects/${name}/02_2.jpg`
            },
            {
                src: `/content/projects/${name}/02_1.jpg`
            },
            {
                src: `/content/projects/${name}/02_3.jpg`
            },
            {
                src: `/content/projects/${name}/02_4.jpg`
            },
            {
                src: `/content/projects/${name}/02_5.jpg`
            },
            {
                src: `/content/projects/${name}/02_6.jpg`
            },
            {
                src: `/content/projects/${name}/02_7.jpg`
            },
        ],
    }
}
