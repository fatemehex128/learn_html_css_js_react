import {useEffect, useState} from "react";

export default function LifeCycle() {


    const [foodPro, setFoodPro] = useState(0)
    const [newCount, setNewCount] = useState(0)
    const [name, setName] = useState("")

    // باعث میشه با هر rerender کد داخل تابع اجرا شود
    // بعد از render اولیه اجرا میشه نه قبل ان
    // useEffect(() => {
    //     console.log("component render")
    // })


    // فقط یک بار اجرا میشود در اولی اجرا
    useEffect(() => {
        // کاربرد : اتصال web socket به سرور
        console.log("rerender for first render");
        setName(localStorage.getItem("name"))

        // این تابغ clean up هست دو جا اجرا میشود. بعد از حذف شدن کامپوننت - قبل از اجرای مجدد همین useEffect
        return () => {
            // زمانی که رفتیم صفحه دیگه و این کامپوننت استفاده نداشت اتصال web socket را هم قطع کند
            console.log("component is removed!")
        }
    }, [])


    // هر وقت ان state ای که به آرایه اش دادیم تغییر کنه تابع اجرا میشه
    useEffect(() => {
            console.log("foodPro state is changed!");

        },
        // اگر state مربوط هر کدام از این ها تغییر کرد تابع اجرا شود
        [foodPro, newCount]);


    useEffect(() => {
        console.log("changed...")
        if (name !== "") {
            localStorage.setItem("name", name)
        }
    }, [name]);

    return <div>

        <button onClick={() => setFoodPro(x => x + 1)}>change foodPro</button>
        {foodPro}

        <button onClick={() => setNewCount(x => x + 1)}>change new count</button>
        {newCount}

        <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
    </div>
}