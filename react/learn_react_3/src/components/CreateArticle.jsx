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


    const [taskList, setTaskList] = useState([])
    // دو راه برای ست کردن مقدار جدید دارین
    // مستقیم خودمان داده را ست کنیم
    // setRangePrice(rangePrice + 100)
    // یک تابع به ان میدهیم و ان برای ما مقدار قبلی را میدهد و هرچی ری ترن کنیم جای گذین مقدار قبلی میکند
    // setRangePrice(v => v + 100)

    // برای همه این اینپوت ها نیاز داریم داده هاشون را به صورت لحظه ای برداریم
    // یعنی چی نیاز داریم ؟ گوش دادن در زمان تغییرشون OnChange
    // رویداد ها چی میگیرند؟
    // یک تابع میگیرند و هر وقت اتقاف رخ داد صداش میزنن
    // کال بک فانکشن
    return (<div>
        <div>
            <input value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} type="text" placeholder={"Title"}/>
            <div><textarea value={content} onChange={(e) => {
                setContent(e.target.value)
            }} placeholder={"Content"}></textarea></div>
            <div>رنگ<input value={color} onChange={(e) => {
                setColor(e.target.value)
            }} type="color"/></div>
            <div>تاریخ حذف<input value={date} onChange={(e) => {
                setDate(e.target.value)
            }} type="date"/></div>
            <div>مخصوص چه رنج افرادی باشد<input value={rangePrice} onChange={(e) => {
                setRangePrice(e.target.value)
            }} type="range"/></div>
            <select value={deletedAt} onChange={(e) => {
                setDeletedAt(e.target.value)
            }}>
                <option value="fast">انتشار فوری</option>
                <option value="tomorrow">فردا</option>
                <option value={"nexTomorrow"}>پس فردا</option>
            </select>
            <div>ارسال به تلگرام : <input checked={isTelegram} onChange={(e) => {
                setIsTelegram(e.target.checked)
            }} type="checkbox"/></div>
            <div>ارسال به اینستاگرام : <input checked={isInstagram} onChange={(e) => {
                setIsInstagram(e.target.checked)
            }} type="checkbox"/></div>
            مخصوص چه افرادی هست؟
            <div>زن<input value={"zan"} checked={gender === "zan"} onChange={(e) => {
                setGender(e.target.value)
            }} name="gender" type="radio"/></div>
            <div>مرد<input value={"mard"} checked={gender === "mard"} onChange={(e) => {
                setGender(e.target.value)
            }} name="gender" type="radio"/></div>

            <button onClick={() => {
                let finalData = {
                    title: title,
                    content: content,
                    date: date,
                    color: color,
                    deletedAt: deletedAt,
                    rangePrice: rangePrice,
                    isTelegram: isTelegram,
                    isInstagram: isInstagram,
                    gender: gender,
                }
                setTaskList([...taskList, finalData])
                // taskList.push(finalData)
            }}>ارسال
            </button>
            <hr/>
            <div>title : {title}</div>
            <div>content : {content}</div>
            <div>date : {date}</div>
            <div>color : {color}</div>
            <div>deletedAt : {deletedAt}</div>
            <div>rangePrice : {rangePrice}</div>
            <div>isTelegram : {isTelegram ? "true" : "false"}</div>
            <div>isInstagram : {isInstagram ? "true" : "false"}</div>
            <div>gender : {gender}</div>
        </div>


        <div>
            {taskList.map(x=><div>{x.title} - {x.color} - {x.rangePrice} - {x.gender} - {x.isTelegram} </div>)}
        </div>

    </div>)
}