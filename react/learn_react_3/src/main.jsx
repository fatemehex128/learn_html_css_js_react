import {createRoot} from 'react-dom/client'
import {Router, RouterProvider,} from '@tanstack/react-router'
import {StrictMode} from "react";
import {routeTree} from './routers.jsx';
import "./main.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={new Router({routeTree})}/>
    </StrictMode>,
)
