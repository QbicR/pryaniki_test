import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom/client'

import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app/App'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
)
