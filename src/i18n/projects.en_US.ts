import villaPalmView from './projects/villa-palm-view.en_US';
import villaVoque from './projects/villa-voque.en_US';
import sternRestaurant from './projects/stern-restaurant.en_US';
import villaEmerald from './projects/villa-emerald.en_US';
import villaSPA from './projects/villa-spa.en_US';
import kozikhinskyApt from './projects/kozikhinsky-apt.en_US';
import wellnessTikhvin from './projects/wellness-tikhvin.en_US';
import golfVilla from './projects/golf-villa.en_US';

const projects = [
    villaPalmView,
    villaVoque,
    sternRestaurant,
    villaEmerald,
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
