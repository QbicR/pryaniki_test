import React from 'react'
import './styles/index.css'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'

const App = () => {
    return (
        <div>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
