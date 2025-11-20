// برای استفاده از routing در ری اکت از react-router-dom استفاده میکنیم
// BrowserRouter: این کامپوننت کل اپلیکیشن را میپوشاند و امکان استفاده از routing را فراهم میکند
// Routes: این کامپوننت تمام route های ما را در بر میگیرد
// Route: این کامپوننت یک مسیر خاص را تعریف میکند و مشخص میکند که در آن مسیر چه کامپوننتی نمایش داده شود
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
// کامپوننت Login را import میکنیم تا بتوانیم از آن در routing استفاده کنیم
import {Login} from './Login.jsx'

// این کامپوننت اصلی اپلیکیشن است
// BrowserRouter باید دور کل اپلیکیشن باشد تا routing کار کند
function App() {
    return (
        // BrowserRouter: این کامپوننت از react-router-dom است
        // این کامپوننت باید دور کل اپلیکیشن باشد
        // این کامپوننت از HTML5 History API استفاده میکند تا URL را تغییر دهد بدون reload کردن صفحه
        <BrowserRouter>
            {/* Routes: این کامپوننت تمام route های ما را در بر میگیرد */}
            {/* Routes فقط اولین route ای که match شود را نمایش میدهد */}
            <Routes>
                {/* Route: این کامپوننت یک مسیر خاص را تعریف میکند */}
                {/* 
                    path: این prop مشخص میکند که این route در چه آدرسی فعال شود
                    در اینجا "/login" یعنی وقتی کاربر به آدرس /login برود این route فعال میشود
                    
                    element: این prop مشخص میکند که در این route چه کامپوننتی نمایش داده شود
                    در اینجا <Login/> یعنی کامپوننت Login نمایش داده شود
                */}
                <Route path="/login" element={<Login/>}/>
                
                {/* Route برای صفحه اصلی */}
                {/* 
                    path="/" یعنی وقتی کاربر به آدرس اصلی (root) برود این route فعال میشود
                    میتونیم یک صفحه اصلی ساده بسازیم یا به صفحه login redirect کنیم
                */}
                <Route path="/" element={
                    <div style={{padding: '20px', textAlign: 'center'}}>
                        <h1>صفحه اصلی</h1>
                        <p>به صفحه اصلی خوش آمدید</p>
                        <a href="/login" style={{color: 'blue', textDecoration: 'underline'}}>
                            رفتن به صفحه ورود
                        </a>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
