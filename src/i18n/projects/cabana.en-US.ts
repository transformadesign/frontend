const name = 'cabana';
const title = 'Cabana';
const location = 'Palm Jumeirah';
const country = 'UAE';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/cabana_1.jpg`,
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
                src: `/content/projects/${name}/cabana_1.jpg`
            },
            {
                src: `/content/projects/${name}/cabana_2.jpg`
            }
        ],
    }
}
