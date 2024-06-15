import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routesConfig } from './routes'
import Layout from './layouts/Layout'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {routesConfig.map((route, index) => {
                        let Wrapper = Layout;
                        const Page = route.component
                        if(route.layout){
                            Wrapper = route.layout
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Wrapper>
                                        <Page />
                                    </Wrapper>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}