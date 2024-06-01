import routes from "../constants/routes"
import Home from "../pages/Home"
import VirusDetail from '../pages/VirusDetail'
import ListVirus from "../pages/ListVirus"
import Admin from '../pages/Admin'

export const routesConfig = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: VirusDetail },
    { path: routes.virus, component: ListVirus },
    { path: routes.admin, component: Admin },
]
