import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routesConfig } from './routes'
import Layout from './layouts/Layout'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {routesConfig.map((route, index) => {
                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}