import routes from "../constants/routes"
import NoContentLayout from '../layouts/NoContentLayout'
import Home from "../pages/Home"
import VirusDetail from '../pages/VirusDetail'
import ListVirus from "../pages/ListVirus"
import Admin from '../pages/Admin'
import Login from "../pages/Login"
import Category from "../pages/Category"

export const routesConfig = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: VirusDetail },
    { path: routes.virus, component: ListVirus },
    { path: routes.filter, component: Category },
    { path: routes.admin, component: Admin },
    { path: routes.login, component: Login, layout: NoContentLayout },
]
