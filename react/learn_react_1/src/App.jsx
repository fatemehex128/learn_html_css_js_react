import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Confetti from 'react-confetti-boom';
import Snowfall from 'react-snowfall'

// چه تابع هایی ری اکتی هستن؟
// تابع هایی که tag های شبیه html هستن را return میکنند
// <App/>
// یا
// <App></App>
// به تابع های ری اکتی میگویم component
// کال کردن تابع ها به صورت زیر است
// <App/>
export function App() {

    // در جا هایی که نیاز داریم متغییری داشته باشین که با تغیر ان صفحه مجدد ری رندر شود از useState استفاده میکنیم
    // تابع useState در خروجی خود یک ارایه به ما میدهد
    // خونه اول آن مقدار اولیه هست که ما داخل متغیر مان میخواستیم داشته باشیم
    // خونه دوم آن یک آدرس تابع هست
    // این آدرس تابع یک ورودی دریافت میکند
    // هرچیزی به آن بدهیم ست میکند روی خونه اول خودش
    // عملا پس ما میتوانیم این ارایه را استخراج کنیم که راحت تر باشیم
    // و هر جا نیاز به نمایش یا پاس دادن مقدار داریم از خونه اول ان استفاده میکنیم
    // هر وقت خواستیم مقدارش را عوض کنیم مقدار جدید را به تابغ set آن یعنی خونه دوم میدهیم
    // بعد از این که مقدار را بگیرد خودش صفحه را مجدد ری رندر میکنئ و همه چیز بروز میشود
    // عملا این کار را میکنیم که یک تابع داشته باشیم که هر وقت تغیر کرد متغیر ما خودش به صورت خودکار ری رندار را اجرا کند
    let [canShowConfetti, setCanShowConfetti] = useState(false)
    let [showsnowfall, setShowsnowfall] = useState(false)
    // =
    // let canShowArr = useState(false)
    // canShowArr[0] // داخل خونه اول مقدار ما هست
    // canShowArr[1](true) // داخل خونه دوم تابغ هست که برای ست کردن مقدار به خونه اول استفاده میشود


    let x = () => {
        setCanShowConfetti(!canShowConfetti)
    }
    let y = () => {
        setShowsnowfall(!showsnowfall)
    }
    return (
        <>
            {/*
            در کامپوننت های ری اکت که داخلشون html هست اگر نیاز باشد کد js نوشته شود باید داخل {} باشد
            کدی که داخل این کرولی بریس ها هستن فقط باید یک خطی باشند
            یعنی
            مثل صدا زدن تابع
            مثل بررسی شرط && یا ||
            مثل قرار دادن یک متغیر
            مثل صدا زدن map رو قرار داده خروجی map توی اون بخش
            هر کد js ای که نیاز به فاصله داشته باشد یا چند خطی باشد نمیشود
            */}
            <div onClick={x}>show confetti</div>
            <div>
                {/*{canShowConfetti && <Confetti/>}*/}
                {canShowConfetti ? <Confetti mode="fall"/> : null}

                <div style={{backgroundColor: "red"}}>{canShowConfetti ? "we show Confetti" : "we cant show Confetti"}</div>
            </div>

            <div onClick={y}>
                see snow fall
            </div>
            <div>
                {showsnowfall && <Snowfall/>}
            </div>
            <div>
                {showsnowfall ? " we see":"we cant see"}
            </div>




        </>
    )
}

// این تابع  javascript ای هستش و میشود به صورت عادی صداشون زد یا ادرس شون رو به کسی داد
// کال کردن تابغ js ای به صورت زیر است
// باید جلوش رانتز بزاری
// ()
// myNormalFunc()
export function myNormalFunc() {
    return "sdasd"
}
// __________________________________________________________________________________________________________________________________________-
// <!--  <body>-->
// //در زی اکت کامپوننت یعنی ورودی یا پراپ میگیرد و یوآی یا رابط کاربری تحویل میدهد.
// //اسم کامپوننت ها باید حرف بزرگ باشد و در اصول ری اکت تکراری نباشد
// // در کلاس ها باید یک نمونه بسازیم مثل
// class HelloWorld {
//     hello() {
//         return <div> Hello World</div>
//     }
// }
//
// const helloWorld = new HelloWorld();
// ReactDom.render(helloWorld.hello(), document.getElementById('root'));/* ایدی میدهیم که بگوییم در کجا رندر بگرد.*/
// // ولی این نمونه ساختن اضافی هست و طور دیگر ئیش میرویم
// // پراپس یک آبجکت است که یه صورت اتوماتیک توسط  ری اکت به کامپوننت اضافه میشع شامل اتریبیوت ها و فرزندانی که در زمان فراخوانی اضفه میشه. پراپس از والد به فرزند پاس داده میشود و یک مقدار ریدآنلی است و حق تغییر نداریم.
