const HomePath = '/';
const ContactsPath = 'contacts'
const AbouteUsPath = 'aboute-us'
const NotFoundPath = '*'

export const paths = { HomePath, ContactsPath, AbouteUsPath, NotFoundPath }


export const routes = [
    {
        label: 'Home',
        path: `${HomePath}`
    },
    {
        label: 'Contacts',
        path: `/${ContactsPath}`
    },
    {
        label: 'Aboute us',
        path: `/${AbouteUsPath}`
    }
]