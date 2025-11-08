// متد های کمکی برای دستکاری ارایه ها
let workStrArr = ["Banana", "Orange", "Apple", "Mango"];
let workNumArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// اضافه کردن یک مقدار
workStrArr.push(1)

// حذف کردن یک مقدار و بازگشت داده آن مقدار
let x = workStrArr.pop()

// اضافه کردن یک مقدار به شروع ارایه
workStrArr.unshift(1)

// حذف کردن یک مقدار از شروع ارایه
workStrArr.shift()

// تبدیل ارایه به آبجکت
let myObj = Object.assign({}, workStrArr)

// این متد کاربرد اش اضافه کردن یک خونه به یک نقطه خاص در ارایه هست و میتوان ازش برای حذف یک خونه ارایه هم استفاده کرد

// Spread (پاره میکنه)
// این متد سه ورودی میگیرد ورودی اول مشخص میکند از خونه چندم و ورودی دوم میگه چند تا خونه پاک کند و ورودی سوم میگه چی اضافه کند و از انجایی که ورودی سوم به صورت spread تغریف شده میتواند بی نهایت ورودی دریافت کند
//نمونه برای اضافه کردن یک مقدار به یک نقطه خاص
// workNumArr.splice(2, 0, workStrArr[0],workStrArr[1],workStrArr[2],workStrArr[3])
workNumArr.splice(2, 0, ...workStrArr,...workStrArr,...workStrArr)
// [10, 20, 'Banana', 'Orange', 'Apple', 'Mango', 30, 40, 50, 60, 70, 80, 90, 100]
// workNumArr.splice(2, 0, workStrArr)
//[10, 20, ['Banana', 'Orange', 'Apple', 'Mango'], 30, 40, 50, 60, 70, 80, 90, 100]

//نمونه برای حذف یک خونه خاص
workNumArr.splice(3, 2)

// خونه سوم splice به صورت spread هست پس میتوان بی نهایت ورودی گرفت مثال زیر جهت یادآوری روش ساخت Spread ها به عنوان آرگومان میباشد

// Spread (پاره میکنه)
xxx(1, 2, 3, ...workNumArr)
// Rest (استخراج میکنه)
function xxx(a, b, ...c) {

}
let [a,b, c,...baghie] = workNumArr;

// let [a,b, c] = workNumArr;
// // =
// let a = workNumArr[0]
// let b = workNumArr[1]
// let c = workNumArr[2]