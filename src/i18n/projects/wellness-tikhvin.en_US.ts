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
                src: `/content/projects/${name}/IMG_8356_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8359_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8404_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8410_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8540_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8543_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8688_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8694_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_8697_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_9865_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_9880_en.jpg`
            },
            {
                src: `/content/projects/${name}/IMG_9913_en.jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/IMG_9922_en.jpg`
            },
        ],
    }
}
