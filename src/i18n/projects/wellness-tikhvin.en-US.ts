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
        size: 2200,
        year: 2016,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/WC_Tikhvin_1.jpg`
            },
        ],
    }
}
