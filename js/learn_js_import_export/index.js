// توی پکیج loadash قطعا یک سری تابع ها هستن که export شدن
import _ from 'lodash/lodash.js'

// اگر این فایل امپورت بشه توی یک فایل دیگه از این متغیر نمیشه استفاده کرد و فقط قابل استفاده در همین فایل هستش
let a="xxx"

// روش اول : پشت تابع یا متغیر کلمه export را بنویسیم
export let name = "amir"
export const age = "amir"
export let myFuncArrow = () => {

}
export function myFunc() {

}


// روش دوم
let name2 = "amir"
const age2 = "amir"
let myFuncArrow2 = () => {

}

function MyFunc2() {

}

// در روش export دوم میتوانیم با خیال راحت همه تابع هامون و متغیر هامون رو بسازیم و اخر صفحه فقط بگیم کدوم هاش قابل استفاده برای فایل های دیگر هستن و export میکنیم
export {
    name2,
    age2,
    myFuncArrow2,
    MyFunc2
}



// روش اول استفاده : وقتی ما تابع یا متغیری را export میکنیم داخل یک آبجکت قرار داده میشود و اینطوری میتونیم ابجکت اش را امپورت کنیم و بزاریم توی یک متعیری مثل x و ازش استفاده کنیم
// import x from 'index'
//
// x.name2
// x.myFuncArrow2()