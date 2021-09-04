const name = 'villa-21';
const title = 'Villa 21';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/villa22.jpg`,
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
                src: `/content/projects/${name}/21_1.jpg`
            },
            {
                src: `/content/projects/${name}/21_3.jpg`
            },
            {
                src: `/content/projects/${name}/21_4.jpg`
            },
            {
                src: `/content/projects/${name}/21_5.jpg`
            },
            {
                src: `/content/projects/${name}/21_6.jpg`
            },
            {
                src: `/content/projects/${name}/21_7.jpg`
            },
        ],
    }
}
