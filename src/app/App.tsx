import { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import './styles/index.css'

import { AppRouter } from './providers/router'
import { getUserAuthData } from 'entities/User'

const App = () => {
    const data = useSelector(getUserAuthData)

    useEffect(() => {
        if (data) {
            window.location.reload()
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
