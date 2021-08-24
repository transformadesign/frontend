const name = 'wellness-tikhvin';
const title = 'Wellness center Tikhvin';
const location = 'Yekaterinburg';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/WC_Tikhvin_1.jpg`,
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
                src: `/content/projects/${name}/WC_Tikhvin_1.jpg`
            },
        ],
    }
}
