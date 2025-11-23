import {createRoot} from 'react-dom/client'
import {Link, Outlet, RootRoute, Route, Router, RouterProvider,} from '@tanstack/react-router'

import BtnApp from './components/BtnApp.jsx'
import TodoList from './components/TodoList.jsx'
import {StrictMode} from "react";
import Quiz from './components/Quiz.jsx'
import CreateArticle from "./components/CreateArticle.jsx";
import CreateProduct from "./components/CreateProduct.jsx";
import CreateToDo from "./components/AdvanceToDoList..jsx";
// ساخت layout
// یعنی یک تیکه کد توی همه صفحات ثابت باشد بجز یک بخش ان
// در اینجا همه چیز داخل این کامپوننت ثابت هست برای همه صفحات
// و هر بار ادرس را عوض میکنیم کامپوننت ان ادرس درون Outlet قرار میگیرد
const rootRoute = new RootRoute({
    component: () => (
        <div>
            <h1>نرم افزار تشخیص اختلال شخیصتی</h1>
            <h2>This section is same for all pages</h2>
            <Outlet/>
        </div>
    ),
})


// هر ادرس باید یک نمونه از کلاس route باشد
const routeTree = rootRoute.addChildren([
    new Route({
        getParentRoute: () => rootRoute,
        path: '/',
        component: () => <div><h2>Welcome Home</h2></div>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/btn',
        component: () => <BtnApp/>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/todo',
        component: () => <TodoList/>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/quiz',
        component: () => <Quiz/>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/article',
        component: () => <CreateArticle/>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/product',
        component: () => <CreateProduct/>,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/AdvanceToDo',
        component: () => <CreateToDo/>,
    })
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={new Router({routeTree})}/>
    </StrictMode>,
)
