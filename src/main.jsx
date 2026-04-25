import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { appRouter2 } from './routes/appRouter2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(appRouter2)} />
  </StrictMode>,
)
