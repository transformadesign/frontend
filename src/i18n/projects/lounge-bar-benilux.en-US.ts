const name = 'lounge-bar-benilux';
const title = 'Lounge & bar at Benilux';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/L&B_1.jpg`,
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
                src: `/content/projects/${name}/L&B_1.jpg`
            }
        ],
    }
}
