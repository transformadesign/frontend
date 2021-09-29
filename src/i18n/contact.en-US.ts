import common from './common.en-US.json';

export default {
    contact: {
        page: {
            title: 'Contact'
        },
        intro: {
            title: 'we are transforma',
            subTitle: 'Contact us'
        },
        labelLegal: 'Legal name',
        labelPhone: 'T',
        legal: [
            {
                ...common.contacts.addresses[0],
                phone: common.contacts.phones[0],
                legal: 'IP Anikin Danil Aleksandrovich'
            },
            {
                ...common.contacts.addresses[1],
                legal: 'Studio Dvoe S.r.l.'
            }
        ]
    }
}
