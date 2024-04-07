import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/Spinner/Spinner';
import ProductList from './components/ProductList/ProductList';

const ProductDatails = React.lazy(() => import('./components/ProductDatails/ProductDetails'))


import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "product/:productId",
      element: <ProductDatails />
    },
  ]);

  return (
    <ErrorBoundary key={'12324df'}>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
