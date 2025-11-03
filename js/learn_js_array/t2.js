
// متد های کمکی برای کار با ارایه ها
// همه این متد ها یک فانکشن میگیرن و در زمانی خاص صداش میزنن و مقداری براش میفرستن برای فهمیدن این که چه مدل تابعی باید برای این متد ها بفرستیم باید سمتندات اش را بخونیم
let testArray = [1, 2, 3, 4, 5]


// متد forEach از ما یک آدرس تابع میگیرد و به اضای هر خونه اریه آدرس تابع ما را صدا میزند و اون خونه ارایه را و کلید اش را برای تابع ما میفرستد
testArray.forEach((item, index) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", item, index)
})
// ==
// اگر خودمان میخواستیم forEach را بسازیم به این شکل میشد
let JsForEach = (callbackFn) => {
    for (let key in testArray) {
        callbackFn(testArray[key], key)
    }
}
JsForEach((item, index) => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", item, index)
})


// یک آدرس تابع از ما میگیرد و به اضای هر خونه اریه صدا میزند تابع ما را و اون خونه ارایه و کلید اش را به تابع ما میفرسند. و هرچی تابع ما بازگرداند ان را در همان خانه آرایه جایگذین میکند (میتوانیم ارایه را تغییر بدهیم)
let newTestArray = testArray.map((item, index) => {
    // این کد داخل تابع به اضای هر خونه ارایه صدا زده میشود و هرچی Return بشود جایگذین همان خونه میشود
    return item * index
})
// ==
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

// یک تابع دریافت میکند و به آن
testArray.find((item, index) => {
    console.log(item, index)
})

testArray.some((item, index) => {
    console.log(item, index)
})

testArray.every((item, index) => {
    console.log(item, index)
})


testArray.reduce((acc, item, index) => {
    console.log(item, index)
})

myArr4.sort((a, b) => {
    console.log(a, b)
})


