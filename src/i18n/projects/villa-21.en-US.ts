const name = 'villa-21';
const title = 'Villa XXI';
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
        size: 650,
        year: 2019,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
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
