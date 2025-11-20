// StrictMode یک کامپوننت ری اکت است که برای پیدا کردن مشکلات احتمالی در کد استفاده میشود
// این کامپوننت در حالت development مشکلات را در console نمایش میدهد
import { StrictMode } from 'react'
// createRoot یک تابع از react-dom/client است که برای رندر کردن کامپوننت‌های ری اکت استفاده میشود
// این تابع یک root object میسازد که متد render دارد
import { createRoot } from 'react-dom/client'
// فایل CSS اصلی را import میکنیم تا استایل‌های کلی در کل اپلیکیشن اعمال شود
import './index.css'
// کامپوننت اصلی App را import میکنیم
// چون App به صورت export default است، میتوانیم مستقیماً import کنیم
import App from './App.jsx'

// document.getElementById('root'): این کد یک element از DOM را پیدا میکند که id آن "root" است
// این element در فایل index.html تعریف شده است
// createRoot: این تابع یک root object میسازد که برای رندر کردن کامپوننت‌های ری اکت استفاده میشود
// root.render(): این متد کامپوننت‌های ری اکت را به HTML تبدیل میکند و در DOM قرار میدهد
createRoot(document.getElementById('root')).render(
    // StrictMode: این کامپوننت دور کامپوننت App قرار میگیرد
    // این کامپوننت در حالت development مشکلات احتمالی را چک میکند
    <StrictMode>
        {/* کامپوننت App که کامپوننت اصلی اپلیکیشن است */}
        {/* این کامپوننت شامل routing و تمام صفحات اپلیکیشن است */}
        <App />
    </StrictMode>,
)
