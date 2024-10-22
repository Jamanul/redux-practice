import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
                 <RouterProvider router={router} />
        </Provider>

  </StrictMode>,
)
