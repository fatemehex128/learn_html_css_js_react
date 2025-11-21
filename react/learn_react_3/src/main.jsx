import {createRoot} from 'react-dom/client'
import {Link, Outlet, RootRoute, Route, Router, RouterProvider,} from '@tanstack/react-router'

import BtnApp from './BtnApp.jsx'
import TodoList from './TodoList.jsx'
import {StrictMode} from "react";
import Amir from './Amir.jsx'
import Quiz from './Quiz.jsx'

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
        component: BtnApp,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/todo',
        component: TodoList,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/amir',
        component: Amir,
    }),
    new Route({
        getParentRoute: () => rootRoute,
        path: '/quiz',
        component: Quiz,
    }),

])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={new Router({routeTree})}/>
    </StrictMode>,
)
