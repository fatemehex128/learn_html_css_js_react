
// NaN یعنی not a number
// null یعنی خالی هیچی وجد نداشته
// undefined یعنی نامشخص یعنی تعریف نشده یعنی ساخته نشده
let oneOfMyObjKey = "naneMamad"

// کلید آبجکت ها میتواند هم از string number boolean float باشد و مقدار ها هم میتواند از هر نوعی باشد string number boolean array object function (reference) و میتوانیم خودمان آن را بزاریم نمیتواند کلید ها تکراری باشد
let myObj = {
    name: 'amir',
    age: 20,
    education: 'bachelor',
    city: 'tehran',
    job: 'programmer', // میتواند داخل کوتیشن هم نباشد
    "stringKeyExample": 'programmer', // میتواند کلید اش داخل کوتیشن باشد
    1: "number", // میتواند عددی باشد
    true: "boolean", // میتواند بولین باشد
    1.5: "float",
    arrayExample: [10, 20, 30], // میتواند آرایه باید
    objectExample: {name: "mamad"}, // میتواند آبجکت باید
    returnedFuncExample: function () {
        if (10 > 5) {
            return true
        }
        return false
    }(), // از آنجا که میدانیم آخر ادرس هر تابع اگر پرانتز بزاریم صدا زده میشود پس در اینجا هم وقتی برنامه اجرا میشود بلافاصله این تابع اجرا میشود و مقدار خروجی اش در این خونه ابجکت قرار میگیرد که در اینجا این نمونه کد معادل این میباشد returnedFuncExample : true
    // در جاوااسکریپت به این می‌گوییم:
    // IIFE = Immediately Invoked Function Expression
    funcExample: function () {
        console.log("xxx")
    }, // در اینجا تابع ساخته میشود و داخل خونه حافظه heap ذخیره میشود بدنه تابع و آدرس آن خانه حافظه داخل این خونه آبچکت قرار میگیرد پس هر وقت لازمش داشتیم میتوانیم به این شکل صدایش  بزنیم ()myObj.funcExample اجرا میشود
    funcArrowExample: (x) => {
        return x
    },// میتواند تابع خطی arrow function باشد این هم یک خونه حاقظه ساخته میشود براش و ادرس اش اینجا قرار میگیرد

    funcArrowInlineExample: (x, y) => x * y + 1,
    myObj.funcArrowInlineExample(2, 3)  // خروجی: 2*3+1 = 7

    workWithThis: function () {
        // در اینجا در تابع که داخل آبکت ها هستن میتوانیم به this آن ها دسترسی داشته باشیم تا مقدار های بقلی ان ها را بگیریم مثل کلاس ها
        console.log("this code is runed from workWithThis function")
        // میتوانستیم به خود آبجکت ها دسترسی پیدا کنیم با کلید this
        console.log(this.funcArrowInlineExample())
        console.log(this.true)
        console.log(this[1.5])
        console.log(this[1.5])
        console.log(this[true])
        console.log("this is this")
        console.log(this)

    },

    [oneOfMyObjKey]: "xxx",  // زمانی که کلید ما داخل یک متغییر باشد و ما نیاز داشته باشیم مقدار داخل آن متغییر تبدیل به کلید شود از این روش استفاده میشود این در زمان اجرا به این شکل تبدیل میشود "naneMamad:"xxxx

}
myObj.workWithThis();
// نمونه استفاده از this در کلاس ها جهت یادآوری
// class mamad {
//     y
//
//     yyy() {
//
//     }
//
//     xxx() {
//         this.y
//         this.yyy
//     }
// }


// ==
myObj["workWithThis"]


// کاربرد این روش میتواند این باشد که یک آبجکت بسازی بدی به یک تابع و برای اون تابع مشخص بشه کدوم کلید ها مثلا باید روش محاسبه انجام بشه یا نشه
let example = {
    name: true,
    age: false,
    edu: true
}

// اگر کلید استرینگ بود یا تابغ بود و ثابت بود به این شکل مقدارش دسترسی پیدا میشه
myObj.name // روش دریافت زمانی که نام رو خودمون میدونیم چیه و متغییر هم نیست
myObj.true
myObj.funcExample() // صدا زدن تابع داخل یک کلید
myObj.funcExample // جا به جا کردن ادرس تابع داخل یک کلید
myObj.funcArrowInlineExample()
// myObj.1 زمانی که کلید ماعددی یا بولین هست یا اعشاری هست نمیتوان به این شکل دریافت اش کرد
// myObj.1.5

// زمانی که کلید ما عددی یا بولین یا اعشاری هست فقط به این شکل میتوان دریافت شان کرد مقدارشان را
myObj[1]
myObj[true]
myObj[1.5]
myObj["funcExample"] // درسته داخل اش تابغ هست ولی همچنان کلید اش استرینگه و در اینجا چون تابغ داخل اش را صدا نزدیم ادرس تابع برمیگردد
myObj["funcArrowExample"](1) // در اینجا چون آدرس خونه یک تابع برمیگردد میتوانیم جلوی هر آدرس تابع پرانتز بزاریم و صدایش کنیم
//  البته خود استرینگ ها را هم میتوان به این شکل گرفت
myObj["name"]
// ==
let xxx = "name"
myObj[xxx] // وقتی میخواهیم یک خونه ابجمت را بر اساس یک متغیر دریافت کنیم میتوانیم ان متغییر را داخل براکت بزاریم و مقدارش  دنبال کلید میگیردد
// let xxx2 = prompt("میتوانیم یک کللید استرینگی از کاربر بگیریم بزاریم داخل این و دنبال همین کلمه ای که از کاربرگرفتیم داخل آبجکت مان بگردیم")
// myObj[xxx2]

for (let key in myObj) {
    myObj[key]
}


// میتوانی یک متغیر را بزاریم داخل یک کلیدی که اسمش با همان نام باشد :|
let name = "name"
let age = "age"
let newObj = {myObj: myObj, name: name, age: age} // -> let newOb2 = {myObj, name, age}
// توی آپدیت جدید برای این کار تکراری خلاصه نویسی اومد
let newOb2 = {myObj, name, age}
// میخوام همین آبجکت را داشته باشیم ولی یک کلید دیگه بهش اضافه کنیمک
myObj["new_home"] = "hello new home" // این کار معادل push کردن در آرایه ها میباشد
myObj["name"] = "hello new home" // اکر کلید وجود داشت اون کلید مقدارش عوض میشه دیگه

// در این روش myObj استخراج میشود و درون آبجکت جدید قرار میگیرد
// از این کار برای کپی گرفتن استفاده میشود
let newObj3 = {...myObj}
// از این کار برای اضافه کردن چند مقدار اضافه میشود
let newObj4 = {...myObj, new_home_2: "new home 3"}
let newObj5 = {...myObj, name, age,}
// از این کار برای مرج کردن دوتا آبجکت هم استفاده میشود
let newObj6 = {...myObj, ...example}

myObj["funcArrowExample"](1) // در اینجا چون آدرس خونه یک تابع برمیگردد میتوانیم جلوی هر آدرس تابع پرانتز بزاریم و صدایش کنیم



// استخراح یک خونه از ابجکت ها داخل متغیر
let xx = {name: "amir", age: 20}

// راه عادی
let name = xx.name
// =
// راه حرفه ای میگیم خونه name و age بره داخل متغیر های name ,age
let {name, age} = xx

// اگر دستی یک خونه دیگه به آیجکت ها اضافه کردیم میتونیم اونم استخراج کنیم
// xxx["age2"]=220
let {name,age2} = xxx
// -------------------------------------------------

