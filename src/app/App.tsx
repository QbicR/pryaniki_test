import { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import './styles/index.css'

import { AppRouter } from './providers/router'
import { getUserAuthData } from 'entities/User'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const App = () => {
    const data = useSelector(getUserAuthData)
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            navigate(RoutePath.main)
        }
    }, [data])

    return (
        <div>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
