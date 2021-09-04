const name = 'villa-2';
const title = 'Villa II';
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
        size: 650,
        year: 2019,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
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
