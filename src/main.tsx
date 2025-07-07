import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/CreateTrip.tsx'
import Header from './components/custom/Header.tsx'
import { Toaster } from 'sonner'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[trip]/ViewTrip.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/create-trip',
    element : <CreateTrip />
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header />
    <Toaster position='top-center' richColors/>
    <RouterProvider router={router}/>
  </GoogleOAuthProvider>
  </StrictMode>,
)
