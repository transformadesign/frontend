import villaPalmView from './projects/villa-palm-view.en-US';
import villaVoque from './projects/villa-voque.en-US';
import sternRestaurant from './projects/stern-restaurant.en-US';
import villaEmerald from './projects/villa-emerald.en-US';
import villaSPA from './projects/villa-spa.en-US';
import kozikhinskyApt from './projects/kozikhinsky-apt.en-US';
import wellnessTikhvin from './projects/wellness-tikhvin.en-US';
import golfVilla from './projects/golf-villa.en-US';

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
