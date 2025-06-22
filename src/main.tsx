import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/CreateTrip.tsx'
import Header from './components/custom/Header.tsx'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/create-trip',
    element : <CreateTrip />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Toaster position='top-center' richColors/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
