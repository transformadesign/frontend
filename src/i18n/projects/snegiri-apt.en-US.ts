const name = 'snegiri-apt';
const title = 'Apartment at Snegiri';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/Ap_Snegiri.jpg`,
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
                src: `/content/projects/${name}/Ap_Snegiri.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Snegiri_1.jpg`
            },
        ],
    }
}
