const name = 'kozikhinsky-apt';
const title = 'Apartment at Kozikhinsky';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/Ap_kozikh_1.jpg`,
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
                src: `/content/projects/${name}/Ap_kozikh_1.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_2.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_3.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_4.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_5.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_6.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_kozikh_7.jpg`
            },
        ],
    }
}
