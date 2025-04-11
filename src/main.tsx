import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/AppRouter'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './application/store/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router = {AppRouter} />
  </Provider>,
)
