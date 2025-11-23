import {useState} from "react";
import confetti from 'canvas-confetti';


export default () => {
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    let [color, setColor] = useState("")
    let [NameOfPerson, setNameOfPerson] =useState("")
    let [startDate, setDate] = useState("")
    let[EndDate,setEndDate]=useState("")
    let [TimePeriod, setStatus] = useState("")
    let [draft, setDraft] = useState(false)
    let [priority, setPriority] = useState("")
    let [condition, setCondition] = useState("")
    let [taskList, setTaskList] = useState([])

    return (
        <div>
            <div>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} placeholder={"Title"} />
                <div> توضیحات<textarea onChange={(e)=>{setContent(e.target.value)}} placeholder={"Content"}></textarea></div>
                <div>رنگ<input type="color" onChange={(e)=>{setColor(e.target.value)}}/></div>
               <div>نام انجام دهنده
                 <select value={NameOfPerson} onChange={(e)=>{setNameOfPerson(e.target.value)}}>
                    <option value="fatemeh">فاطمه</option>
                    <option value="amir">امیر</option>
               </select></div>
                <div>تاریخ شروع<input onChange={(e)=>{setDate(e.target.value)}} type="date"/></div>
                <div>تاریخ پایان<input onChange={(e)=>{setEndDate(e.target.value)}} type="date"/></div>
                <div>مدت زمانی<input onChange={(e)=>{setStatus(e.target.value)}} type="time"/></div>
                <div>پیشنویس<input onChange={(e)=>{setDraft(e.target.checked)}} type="checkbox"/></div>
                <div> اولویت<select value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
                    <option value="first">1</option>
                    <option value="second">2</option>
                    <option value="third">3</option>
                </select></div>
                <div>وضعیت<select value={condition} onChange={(e)=>{setCondition(e.target.value)}}>
                    <option value="isdoing">در حال انجام</option>
                    <option value="isDone">تکمیل شده</option>
                    <option value="isNotDone">تکمیل نشده</option>
                </select></div>
                <div><button onClick={()=>{
                    let finalData = {
                        title: title,
                        content: content,
                        color: color,
                        NameOfPerson: NameOfPerson,
                        startDate: startDate,
                        EndDate: EndDate,
                        TimePeriod: TimePeriod,
                        draft: draft,
                        priority: priority,
                        condition: condition
                    }
                    setTaskList([...taskList, finalData])
                    
                    // 🎉 نمایش confetti بعد از ثبت موفق
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }}>ثبت</button></div>
                <hr/>
                <table border="1">
                    <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>عنوان</th>
                        <th>توضیحات</th>
                        <th>رنگ</th>
                        <th>نام انجام دهنده</th>
                        <th>تاریخ شروع</th>
                        <th>تاریخ پایان</th>
                        <th>مدت زمان</th>
                        <th>پیشنویس</th>
                        <th>اولویت</th>
                        <th>وضعیت</th>
                    </tr>
                    </thead>
                    <tbody>
                    {taskList.map((x, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{x.title}</td>
                            <td>{x.content}</td>
                            <td>{x.color}</td>
                            <td>{x.NameOfPerson}</td>
                            <td>{x.startDate}</td>
                            <td>{x.EndDate}</td>
                            <td>{x.TimePeriod}</td>
                            <td>{x.draft ? "بله" : "خیر"}</td>
                            <td>{x.priority}</td>
                            <td>{x.condition}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    {taskList.map((x, index) => <div key={index}>{x.title} - {x.color} - {x.NameOfPerson === "fatemeh" ? "فاطمه" : x.NameOfPerson === "amir" ? "امیر" : x.NameOfPerson} - {x.TimePeriod} - {x.startDate} - {x.EndDate} - {x.priority} - {x.condition} - {x.draft ? "بله" : "خیر"}</div>)}
                </div>

            </div>
        </div>
    )
}