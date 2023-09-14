const HomePath = '/';
const ContactsPath = 'contacts'
const AbouteUsPath = 'aboute-us'
const NotFoundPath = '*'

const paths = { HomePath, ContactsPath, AbouteUsPath, NotFoundPath }

const routes = [
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

export { routes, paths }