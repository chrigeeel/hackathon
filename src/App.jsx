import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frame from "./frame/Frame";
import Home from "./pages/home/Home";
import Legende from "./pages/legende/Legende";
import Ranking from "./pages/ranking/Ranking";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Frame />,
        children: [
            {
                path: "/legende",
                element: <Legende />,
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/ranking",
                element: <Ranking />,
            },
        ],
    },
]);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
