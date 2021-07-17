// csp: vitals.vercel-analytics.com

module.exports = {
    redirects() {
        return [
            {
                source: '/',
                destination: '/ru',
                permanent: false
            },
            {
                source: '/projects',
                destination: '/ru/projects',
                permanent: false
            }
        ];
    }
};
