// متد های کمکی برای کار با ارایه ها
// همه این متد ها یک فانکشن میگیرن و در زمانی خاص صداش میزنن و مقداری براش میفرستن برای فهمیدن این که چه مدل تابعی باید برای این متد ها بفرستیم باید سمتندات اش را بخونیم
let testArray = [1, 2, 3, 4, 5,19]


// متد forEach از ما یک آدرس تابع میگیرد و به اضای هر خونه اریه آدرس تابع ما را صدا میزند و اون خونه ارایه را و کلید اش را برای تابع ما میفرستد
testArray.forEach((item, index) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", item, index)
})
// ==
// باید یک تابع به من بده که سه مقدار بگیره
let JsForEach = (callbackFn) => {
    for (let key in testArray) {
        callbackFn(testArray[key], key)
    }
}
JsForEach((item, index) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", item, index)
})
//
// map یعنی:
//     «روی تک‌تک اعضای آرایه بچرخ و برای هرکدام یک خروجی جدید برگردان، و در نهایت یک آرایه جدید بساز»
// یک آدرس تابع از ما میگیرد و به اضای هر خونه اریه صدا میزند تابع ما را و اون خونه ارایه و کلید اش را به تابع ما میفرسند. و هرچی تابع ما بازگرداند ان را در همان خانه آرایه جایگذین میکند (میتوانیم ارایه را تغییر بدهیم)
let newTestArray = testArray.map((item, index) => {
    // این کد داخل تابع به اضای هر خونه ارایه صدا زده میشود و هرچی Return بشود جایگذین همان خونه میشود
    return item * index
})
// ==
// باید یک تابع به من بده که سه مقدار بگیره و یک مقدار جدید واسه اون خونه برگردونه
let JsMap = (callbackFn) => {
    // یک ارایه جدید ساختیم که مقدار های تغییر یافته را داخلش ذخیره کنیم
    let newArray = []
    for (let key in testArray) {
        // هر بار یک خونه ارایه را به تابغ میفرستیم و تابع هر چی به ما بده میزاریم توی همونه در ارایه جدید اینطوری باعث میشه ارایه فعلی ما مقدارش با استفاده از یک تابع تغییر کند
        newArray[key] = callbackFn(testArray[key], key)
    }
    return newArray
}
// این نمونه کد میشه جایگذین دستی testArray.map()
JsMap((item, index) => {
    // این کد داخل تابع به اضای هر خونه ارایه صدا زده میشود و هرچی Return بشود جایگذین همان خونه میشود
    return item * index
})

// یک تابع از ما میگیره و این تابع را به اضای هر خونه ارایه ما صدا میزنه اگر این تابع برای اون خونه مقدار false برگردونه اون خونه ارایه حذف میشه از ارایه جدید
let newArrayFiltered = testArray.filter((item) => {
    if (item % 2 === 0) {
        return true
    } else {
        return false
    }
})

// ==
// باید یک تابع به من بده که سه مقدار بگیره و یک boolean برگردونه
let JsFilter = (callbackFn) => {
    // یک ارایه جدید ساختیم که مقدار های تغییر یافته را داخلش ذخیره کنیم
    let newArray = []
    for (let key in testArray) {
        // اگه تابع ما برای اون خونه مقدار false برگردونه اون خونه ارایه حذف میشه از ارایه جدید
        if (!callbackFn(testArray[key], key)) {
            continue
        }
        // هر بار یک خونه ارایه را به تTabغ میفرستیم و تابع هر چی به ما بده میزاریم توی همونه در ارایه جدید اینطوری با
        newArray.push(testArray[key])
    }
    return newArray
}

// یک تابع دریافت میکند این تابع سه ورودی میگیرید مثل بقیه تابع های map filter که خونه اول اش مقداره خونه دوم اش ایندکسه و خونه سوم کل آرایه است . این سه مقدار به تابع ما ارسال میشود و ما با استفاده از این سه مقدار باید بررسی کنیم که شرط ما مطابق ان خونه ارایه هست یا نه اگر بود True و اگر نبود false برگردانیم و زمانی که true برگشته بشه همان خانه را متد find به ما مقدارش را میدهد که به معنی این بود که پیدا شد
let foundedValue = testArray.find((item, index) => {
    return item === 5
})

// باید یک تابع به من بده که سه مقدار بگیره و یک boolean برگردونه
let JsFind = (callbackFn) => {
    for (let key in testArray) {
        if (callbackFn(testArray[key], key)) {
            return testArray[key]
        }
    }
}
// یک تابع میگیرد و سه تا خونه میفرستد و یک boolean میخواد
// اگر حتی یکی از خونه ها توسط تابع ما true برگشت داده بشه مقدار برگشتی این متد true هست
let haveOneOf = testArray.some((item) => {
    return item > 18
})

let JsSome = (callbackFn) => {
    for (let key in testArray) {
        if (callbackFn(testArray[key], key)) {
            return true
        }
    }
    return false
}

// یک تابع میگیرد و سه تا خونه میفرستد و یک boolean میخواد
// کارش این هست که ببیند ایا همه خونه های ارایه با شرط ما صدق میکند یا نه
// اگر حتی یک خونه از ارایه با شرط ما false بشه مقدار برگشتی این متد False
let checkedStatus = testArray.every((item) => {
    if (item > 0) {
        return true
    } else {
        return false
    }
})

let JsEvery = (callbackFn) => {
    for (let key in testArray) {
        if (!callbackFn(testArray[key], key)) {
            return false
        }
    }
    return true
}
// اگر بهش تابع ندیم به صورت معمولی مرتب میکند از کوچیک به بزرگ
// این حالت زمانی کار میکند که ارایه ما قابل مرتب سازی باشد یعنی فقط عدد باشه یا فقط استرینگ باشه
myArr4.sort()
myArr4.reverse()

myArr4.sort((a, b) => {
    return a - b
})

let JsSort = (callbackFn) => {
    for (let i = 0; i < testArray.length; i++) {
        for (let j = i + 1; j < testArray.length; j++) {
            if (callbackFn(testArray[i], testArray[j]) > 0) {
                let temp = testArray[i]
                testArray[i] = testArray[j]
                testArray[j] = temp
            }
        }
    }

}
