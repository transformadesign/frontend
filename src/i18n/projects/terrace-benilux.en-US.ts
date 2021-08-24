const name = 'terrace-benilux';
const title = 'Terrace at Benilux';
const location = 'Moscow';
const country = 'Russia';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/Terrace_benilux_1.jpg`,
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
                src: `/content/projects/${name}/Terrace_benilux_1.jpg`
            },
            {
                src: `/content/projects/${name}/Terrace_benilux_2.jpg`
            },
            {
                src: `/content/projects/${name}/Terrace_benilux_3.jpg`
            },
            {
                src: `/content/projects/${name}/Terrace_benilux_4.jpg`
            },
            {
                src: `/content/projects/${name}/Terrace_benilux_5.jpg`
            },
        ],
    }
}
