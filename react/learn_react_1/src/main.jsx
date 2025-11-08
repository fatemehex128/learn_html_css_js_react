import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// اینجا جون App به صورت export default نیست باید استخراج اش کنیم
import {App} from './App.jsx'
// ولی اگر export default بود به صورت زیر import میکردیم
// import App from './App.jsx'
// در صورتی که داخل یک فایل jsx ری اکتی نیاز به css داشتیم به صورت زیر import میشوند
import './index.css'
// زمانی که داهل یک فایل js یک متغیر را export defualt کنیم آن وقت اجازه خواهیم داشت به شمل زیر مستقیم بریزیم اش داخل یک متغیر و نیازی به اکسپورت موارد مورد نیاز مثل مثال بالا نیست 
// import Confetti from 'react-confetti-boom';

// هر فایل js میتواند یک آبجکت از مواردی که export شدن برگرداند زمان import کردن ان ها اگر آن خروجی را بریزم داخل یک متعیری به اسم x میتوانیم از خونه هایی که export شدن استفاده کنیم
// import x from './App.jsx'
//
// let {App, name} = x
// // =
// let App = x.App
// let name = x.name
// یا هم از روش ساده تر آن استحراج ابجکت استفاده میکنیم توی یک خط که مجبور نشیم کل ابجکت را اول بریزم داخل یک متعییر بعد خونه های اون رو جدا استفاده کنیم
// همونجا توی یک خط هر خونه ای که لازم داشتیم را استخراج میکنیم با استفاده از روش استخراج خونه از ابجکت
// import {name,App} from "./App.jsx";

// اول ری اکت میره دنبال تگ با ایدی root میگرده و dom اون رو برمیداره میده به createRoot تا یک آیجکت خاص ری اکت برای ما بسازه که داخلش یک متد render داره
let x = document.getElementById('root')

let root = createRoot(x);
// این متد render خیلی ساده فقط تگ html ری اکتی میخواد هرچی بهش بدی نشون میده توی صفحه
// چطوری نشون میده؟
// میاد تگ های ری اکتی رو تبدیل به createElement میکنه و appendChild اون تگ div ای که ایدی اش root بود و از طریق dom گرفتیم اش میکنه
root.render(<App/>)
// root.render(<App></App>)
// ==
// let children = document.createElement('div');
// children.innerHTML = "amir"
//
// root.render(children)