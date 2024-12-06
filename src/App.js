import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const routeDefinitions = createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
