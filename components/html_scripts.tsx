import React from 'react';

const Scripts: React.FC = () => (
    <>
        {/* Jquery JS */}
        <script src="/vendor/jquery/jquery.min.js" />
        {/* Bootstrap JS */}
        <script src="/vendor/bootstrap-4.1/bootstrap.min.js" />
        {/* Vendor JS */}
        <script src="/vendor/animsition/animsition.min.js" />
        <script src="/vendor/slick/slick.js" />
        <script src="/vendor/waypoints/jquery.waypoints.min.js" />
        <script src="/vendor/wow/wow.min.js" />
        <script src="/vendor/jquery.counterup/jquery.counterup.min.js" />
        <script src="/vendor/isotope/isotope.pkgd.min.js" />
        <script src="/vendor/isotope/imagesloaded.pkgd.min.js" />
        <script src="/vendor/matchHeight/jquery.matchHeight-min.js" />
        <script src="/vendor/select2/select2.min.js" />
        <script src="/vendor/sweetalert/sweetalert.min.js" />
        <script src="/vendor/noUiSlider/nouislider.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/jquery.themepunch.tools.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/jquery.themepunch.revolution.min.js" />
        {/*
        | (Load Extensions only on Local File Systems !
        | The following part can be removed on Server for On Demand Loading)
        */}
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.video.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.slideanims.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.actions.min.js" />
        <script
            type="text/javascript"
            src="/vendor/revolution/js/extensions/revolution.extension.layeranimation.min.js"
        />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.kenburn.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.navigation.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.migration.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.parallax.min.js" />
        <script type="text/javascript" src="/vendor/revolution/js/extensions/revolution.extension.carousel.min.js" />
        {/* Config Revolution Slider */}
        <script type="text/javascript" src="/js/config-revolution.js" />

        {/* Main JS */}
        <script src="/js/global.js" />
    </>
);

export default Scripts;
