import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx';
import NoMatch from './pages/NoMatch/NoMatch.jsx';
import Login from './pages/Login/Login.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Success from './pages/Success/Success.jsx';
import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, 
      {
        path: '/shop',
        element: <Shop />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
