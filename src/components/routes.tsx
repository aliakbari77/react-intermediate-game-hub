import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./HomePage";
import GameDetailPage from "./GameDetailPage";

const routes = createBrowserRouter([
    {path: "/", element: <App/>, children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: "games/:id", element: <GameDetailPage/>
            }
        ]}
])

export default routes