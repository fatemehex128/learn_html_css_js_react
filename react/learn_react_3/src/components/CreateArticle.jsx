import {use, useState} from "react";

export default () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState("")
    const [color, setColor] = useState("")
    const [deletedAt, setDeletedAt] = useState("")
    const [rangePrice, setRangePrice] = useState(0)
    const [isTelegram, setIsTelegram] = useState(false)
    const [isInstagram, setIsInstagram] = useState(false)
    const [gender, setGender] = useState("")


    // برای همه این اینپوت ها نیاز داریم داده هاشون را به صورت لحظه ای برداریم
    // یعنی چی نیاز داریم ؟ گوش دادن در زمان تغییرشون OnChange
    // رویداد ها چی میگیرند؟
    // یک تابع میگیرند و هر وقت اتقاف رخ داد صداش میزنن
    // کال بک فانکشن
    return (
        <div>
            <div>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder={"Title"}/>
                <div><textarea onChange={(e)=>{setContent(e.target.value)}} placeholder={"Content"}></textarea></div>
                <div>رنگ<input onChange={(e)=>{setColor(e.target.value)}} type="color"/></div>
                <div>تاریخ حذف<input onChange={(e)=>{setDate(e.target.value)}} type="date"/></div>
                <div>مخصوص چه رنج افرادی باشد<input onChange={(e)=>{setRangePrice(e.target.value)}} type="range"/></div>
                <select onChange={(e)=>{setDeletedAt(e.target.value)}} >
                    <option>انتشار فوری</option>
                    <option>فردا</option>
                    <option>پس فردا</option>
                </select>
                <div>ارسال به تلگرام : <input onChange={(e)=>{setIsTelegram(e.target.checked)}} type="checkbox"/></div>
                <div>ارسال به اینستاگرام : <input onChange={(e)=>{setIsInstagram(e.target.checked)}} type="checkbox"/></div>
                مخصوص چه افرادی هست؟
                <div>زن<input onChange={(e)=>{setGender(e.target.value)}} name="gender" type="radio"/></div>
                <div>مرد<input onChange={(e)=>{setGender(e.target.value)}} name="gender" type="radio"/></div>

                <button>ارسال</button>
                <hr/>
                <div>title : {title}</div>
                <div>content : {content}</div>
                <div>date : {date}</div>
                <div>color : {color}</div>
                <div>deletedAt : {deletedAt}</div>
                <div>rangePrice : {rangePrice}</div>
                <div>isTelegram : {isTelegram}</div>
                <div>isInstagram : {isInstagram}</div>
                <div>gender : {gender}</div>
            </div>

        </div>
    )
}