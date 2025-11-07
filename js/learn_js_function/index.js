// ما چندین روش داریم برای ساخت متغیر
// یک زمانی که متغیر را با استفاده از let یا const یا var میسازیم
let name = "a"
const age = 20
var xx = 20

let sx = []
let sx2 = {}
let sx3 = null
let sx4 = undefined
let sx5 = NaN
let sx6 = true
let sx7 = 1.5
let sx8 = "hello"

// اگر تابع بسازیم با اسنفاده از function نام تابع هم یک متغیر است دیگه
// اسم تابع خودت متغیره چون ادرس تابع در اون ذخیره شده
function MyFunction(x) {
    return x * 2

}

let MyFunction2 = function (x) {
    return x * 2
}
let MyFunction3 = (x) => {
    return x * 2
}
let MyFunction4 = x => x * 2

// زمانی که ارایه را استخراج میکنیم
// در اینجا هم a and b and c متغیر هستند
let [a, b, ...c] = [1, 2, 3, 4, 5, 6]

// زمانی که آبجکت را استخراج میکنیم
// در اینجا هم name and age متغیر هستند
let {name, age} = {name: "amir", age: 20}


// زمانی که یک چیزی را import میکنی
// در اینجا هم myVarExported متغیر هست
import myVarExported from './test.js'
// در اینجا هم namex متغیر هست
import {namex,age,xxx} from './test'