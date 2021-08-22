import villa20 from './projects/villa-20.en-US';
import villaSPA from './projects/villa-spa.en-US';
import kozikhinskyApt from './projects/kozikhinsky-apt.en-US';
import golfVilla from './projects/golf-villa.en-US';
import loungeBarBenilux from './projects/lounge-bar-benilux.en-US';
import snegiriApt from './projects/snegiri-apt.en-US';

export default {
    projects: {
        slider: {
            slides: [
                villa20.project.slide,
                villaSPA.project.slide,
                kozikhinskyApt.project.slide,
                golfVilla.project.slide,
                loungeBarBenilux.project.slide,
                snegiriApt.project.slide,
            ]
        },
        list: [
            villa20.project.name,
            villaSPA.project.name,
            kozikhinskyApt.project.name,
            golfVilla.project.name,
            loungeBarBenilux.project.name,
            snegiriApt.project.name,
        ]
    }
}
