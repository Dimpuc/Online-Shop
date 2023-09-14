import { Header } from '../header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export { Layout }
