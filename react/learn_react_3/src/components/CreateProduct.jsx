import {useRef, useState} from "react";

export default () => {

    // برای دسترسی به اطلاعات داخل یک اینپوت سه راه وجود دارد
    // اول این که با استفاده از onChange به تغییرات اش گوش بدیم و هر وقت تغییر کرد از داخل event اش بریم dom اش را برداریم و از داخل ان بریم value یا checked اش را برداریم ست کنیم روی یک state و داده ها را به صورت لحظه ای داشته باشیم - کاربرد این روش این هست که نیاز داریم داده های اینپوت ها را به صورت لحظه ای داشته باشیم
    // روش دوم : یک useRef میسازیم که یک متغیر بدون رندر به ما بده. این را روی اتریبیوت ref هر تگی بزاریم dom آن تگ را بهش وصل میکند یعنی ادرس dom خودش را میریزد روی این useRef ما و هر وقت نیاز داشتیم دسنی از روش برمیدارین
    // هر وقت نیاز داشتیم به مقدار یک تگ با استفاده از document.getElementById از روی dom اش value آن را برمیداریم
    let inputTextRef = useRef("")
    let inputCheckRef = useRef("")

    return (<div>

        <div>
            <div>name:</div>
            <div><input ref={inputTextRef} type="text"/></div>
        </div>

        <div>
            <div>edu:</div>
            <div><input ref={inputCheckRef} type="checkbox"/></div>
        </div>
        <div>
            <button onClick={() => {
                alert(inputTextRef.current.value+" "+inputCheckRef.current.checked)
            }}>submit
            </button>
        </div>
    </div>)
}