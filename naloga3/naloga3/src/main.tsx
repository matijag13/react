import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SeznamEkip from './components/SeznamEkip';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SeznamEkip />,
  },
  {
    // The :id part allows us to read which team was clicked
    path: '/ekipa/:id',
    element: <App />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)