const name = 'golf-villa';
const title = 'Golf Villa';
const country = 'Kazakhstan';

export default {
    project: {
        slide: {
            img: {
                src: `/content/projects/${name}/golf-villa.jpg`,
            },
            url: `/projects/${name}`,
            title,
            description: `${country}`
        },
        name,
        title,
        country,
        size: 800,
        year: 2021,
        brief: 'Developing an image of living spaces unique in aesthetics and functionality, our designers are not bound in the frames of one style. We revise patterns of different countries and ages, striving for a holistic, complete and sometimes unexpected view.',
        images: [
            {
                src: `/content/projects/${name}/0-(1).jpg`
            },
            {
                src: `/content/projects/${name}/0-1-(2).jpg`
            },
            {
                src: `/content/projects/${name}/0-3-(4).jpg`,
                aspect: 'vert'
            },
            {
                src: `/content/projects/${name}/0-5-(5).jpg`
            },
            {
                src: `/content/projects/${name}/0-5-(7).jpg`
            },
            {
                src: `/content/projects/${name}/1_View09.jpg`
            },
            {
                src: `/content/projects/${name}/1_View12.jpg`
            },
            {
                src: `/content/projects/${name}/A_Golf_Club_Kabinet_01_View02.jpg`
            },
            {
                src: `/content/projects/${name}/A_Golf_Club_Kabinet_01_View03.jpg`
            },
            {
                src: `/content/projects/${name}/Exterior-at-day_5_2.jpg`
            },
            {
                src: `/content/projects/${name}/Exterior-at-day_6_2.jpg`
            },
        ],
    }
}
