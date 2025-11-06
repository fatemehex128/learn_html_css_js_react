import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import _ from 'lodash'

_.map([1,2],function (){})

// اول ری اکت میره دنبال تگ با ایدی root میگرده و dom اون رو برمیداره میده به createRoot تا یک آیجکت خاص ری اکت برای ما بسازه که داخلش یک متد render داره
let x = document.getElementById('root')

let root = createRoot(x);
// این متد render خیلی ساده فقط تگ html ری اکتی میخواد هرچی بهش بدی نشون میده توی صفحه
// چطوری نشون میده؟
// میاد تگ های ری اکتی رو تبدیل به createElement میکنه و appendChild اون تگ div ای که ایدی اش root بود و از طریق dom گرفتیم اش میکنه
root.render(<div>
    <div>amir</div>
</div>)
// ==
// let children = document.createElement('div');
// children.innerHTML = "amir"
//
// root.render(children)