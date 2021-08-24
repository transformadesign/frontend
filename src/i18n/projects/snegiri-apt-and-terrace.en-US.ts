const name = 'snegiri-apt-and-terrace';
const title = 'Apartment & terrace at Snegiri';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_1.jpg`,
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
                src: `/content/projects/${name}/Ap_Terr_Snegiri_1.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_2.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_3.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_4.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_5.jpg`
            },
            {
                src: `/content/projects/${name}/Ap_Terr_Snegiri_6.jpg`
            },
        ],
    }
}
