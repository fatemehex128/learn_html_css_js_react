//bom  یعنی browser obj model
//ساختار درختی دارد
//این یک رابط برنامه‌نویسی (API) است که جاوااسکریپت از طریق آن می‌تونه با مرورگر (نه صفحه HTML) ارتباط برقرار کنه.
//هر بخشی که در دام داریم node نامیده میشود مثل تگ ها مثل متن ها
//window.alert("hello");
//window.open("https://google.com");
document.getElementById("p1").innerHTML = "hello";
//htmlcollection کالکشنی از html هاست.
//document.getElementsByClassName("p1")گرفتن تمام کلاسهای آیدی p
//document.getElementsByTagName("p")گرفتن تمام تگ های p

//querySelector:
//#id  انتخاب المنت با آیدی
//.class انتخاب المنت با کلاس
//* انتخاب همه المنت ها
// * { }
//querySelectorمیگزده و اولین چیزی که ما میخواهیم را پیدا میکند و نه htmlcollection

document.querySelector("#p1").innerHTML = "hello";
//all بگذاری کلش رو انتخاب میکنه
// خروجی این سلکتور ها به صورت آرایه است.
// برای تغییر نام کلاس و آیدی هام بگار میرود با انتخاب کردنش میتوانی نام جدیدی  را به او بدهی.
document.querySelectorAll("#p1").innerHTML = "hello";
//.toggle() تابع اول حذف میکند بعذ دوباره اضافه میکند.
//اگر کلاس وجود داشت → حذف می‌شه → تابع false برمی‌گردونه.
// اگر کلاس نبود → اضافه می‌شه → تابع true برمی‌گردونه.
element.classList.toggle("jjj");


//appeendchild y را به عنوان فرزند x  اضافه میکند
let x= document.createElement("li")
let y= document.createTextNode("mylove")
x.appendChild(y)
console.log(x)


//در دام میتوانیم css inline  را تغییر بذهیم//
document.querySelector("p").style.color="red"
document.querySelector("p").style.backgroundColor="blue"
document.querySelector("p").style.fontSize="20px"
document.querySelector("p").style.fontFamily="Vazir"
document.querySelector("p").style.cssText="color:red;background-color:blue;font-size:20px;font-family:Vazir"
//بدین صورت هم میشه استایل داد
document.querySelector("p").setAttribute("style","color:red;background-color:blue;font-size:20px;font-family:Vazir")



