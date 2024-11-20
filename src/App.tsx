import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/common/theme/ThemeProvider";
import Layout from "./layouts/user/Layout";
import HomePage from "./pages/user/HomePage";
import BooksPage from "./pages/user/BooksPage";
import ServicesPage from "./pages/user/ServicesPage";
import AcquisitonsPage from "./pages/user/AcquisitonsPage";
import LoginPage from "./pages/user/LoginPage";

// Define the types for route elements
// interface Route {
//     path: string;
//     element: JSX.Element;
//     children?: Route[];
// }

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/books",
                element: <BooksPage />,
            },
            {
                path: "/services",
                element: <ServicesPage />,
            },
            {
                path: "/acquisitions",
                element: <AcquisitonsPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

// Define the ThemeProvider component type
// interface ThemeProviderProps {
//     children: React.ReactNode;
// }

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
