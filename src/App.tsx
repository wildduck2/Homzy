import { Route, Routes } from 'react-router'
import { Home } from './pages/home'
import { Error } from './pages/error/Error'
import { BackTop } from './components/backTop/BackTop'

export const App = () => {
    return (
        <>
            <BackTop />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/about'
                    element={<h1>details</h1>}
                />
                <Route
                    path='/*'
                    element={<Error />}
                />
            </Routes>
        </>
    )
}
