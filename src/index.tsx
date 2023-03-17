import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
)
