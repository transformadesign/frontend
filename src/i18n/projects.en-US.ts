import villa2 from './projects/villa-2.en-US';
import villa20 from './projects/villa-20.en-US';
import sternRestaurant from './projects/stern-restaurant.en-US';
import villa21 from './projects/villa-21.en-US';
import villaSPA from './projects/villa-spa.en-US';
import kozikhinskyApt from './projects/kozikhinsky-apt.en-US';
import wellnessTikhvin from './projects/wellness-tikhvin.en-US';
import golfVilla from './projects/golf-villa.en-US';

const projects = [
    villa2,
    villa20,
    sternRestaurant,
    villa21,
    villaSPA,
    kozikhinskyApt,
    wellnessTikhvin,
    golfVilla,
];

export default projects.reduce((result, project) => {
    result.projects.slider.slides.push(project.project.slide);
    result.projects.list.push(project.project.name);

    return result;
}, {
    projects: {
        slider: {
            slides: []
        },
        list: []
    }
});
