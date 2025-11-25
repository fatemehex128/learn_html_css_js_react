import {useEffect,useState} from "react";
import confetti from 'canvas-confetti';


export default (props) => {
    let [taskList, setTaskList] = useState([])

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [taskList]);


    return (
        <div>
            <div>
                <TodoForm taskList={taskList} setTaskList={setTaskList}/>

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
                    {taskList.map((x, index) => <TodoRow item={x} i={index}/>)}
                    </tbody>
                </table>
                <div>
                    {taskList.map((x, index) => <TodoBox item={x} i={index}/>)}
                </div>

            </div>
        </div>
    )
}


function TodoForm({taskList, setTaskList}) {
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    let [color, setColor] = useState("")
    let [NameOfPerson, setNameOfPerson] = useState("")
    let [startDate, setDate] = useState("")
    let [EndDate, setEndDate] = useState("")
    let [TimePeriod, setStatus] = useState("")
    let [draft, setDraft] = useState(false)
    let [priority, setPriority] = useState("")
    let [condition, setCondition] = useState("")

    return <div>
        <input type="text" onChange={(e) => {
            setTitle(e.target.value)
        }} placeholder={"Title"}/>
        <div> توضیحات<textarea onChange={(e) => {
            setContent(e.target.value)
        }} placeholder={"Content"}></textarea></div>
        <div>رنگ<input type="color" onChange={(e) => {
            setColor(e.target.value)
        }}/></div>
        <div>نام انجام دهنده
            <select value={NameOfPerson} onChange={(e) => {
                setNameOfPerson(e.target.value)
            }}>
                <option value="fatemeh">فاطمه</option>
                <option value="amir">امیر</option>
            </select></div>
        <div>تاریخ شروع<input onChange={(e) => {
            setDate(e.target.value)
        }} type="date"/></div>
        <div>تاریخ پایان<input onChange={(e) => {
            setEndDate(e.target.value)
        }} type="date"/></div>
        <div>مدت زمانی<input onChange={(e) => {
            setStatus(e.target.value)
        }} type="time"/></div>
        <div>پیشنویس<input onChange={(e) => {
            setDraft(e.target.checked)
        }} type="checkbox"/></div>
        <div> اولویت<select value={priority} onChange={(e) => {
            setPriority(e.target.value)
        }}>
            <option value="first">1</option>
            <option value="second">2</option>
            <option value="third">3</option>
        </select></div>
        <div>وضعیت<select value={condition} onChange={(e) => {
            setCondition(e.target.value)
        }}>
            <option value="isdoing">در حال انجام</option>
            <option value="isDone">تکمیل شده</option>
            <option value="isNotDone">تکمیل نشده</option>
        </select></div>
        <div>
            <button onClick={() => {

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

                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: {y: 0.6}
                });
            }}>ثبت
            </button>
        </div>
    </div>

}

function TodoRow(props) {

    return <tr key={props.i}>
        <td>{props.i + 1}</td>
        <td>{props.item.title}</td>
        <td>{props.item.content}</td>
        <td>{props.item.color}</td>
        <td>{props.item.NameOfPerson}</td>
        <td>{props.item.startDate}</td>
        <td>{props.item.EndDate}</td>
        <td>{props.item.TimePeriod}</td>
        <td>{props.item.draft ? "بله" : "خیر"}</td>
        <td>{props.item.priority}</td>
        <td>{props.item.condition}</td>
    </tr>
}

function TodoBox(props) {
    return <div
        key={props.i}>{props.item.title} - {props.item.color} - {props.item.NameOfPerson === "fatemeh" ? "فاطمه" : props.item.NameOfPerson === "amir" ? "امیر" : props.item.NameOfPerson} - {props.item.TimePeriod} - {props.item.startDate} - {props.item.EndDate} - {props.item.priority} - {props.item.condition} - {props.item.draft ? "بله" : "خیر"}
    </div>

}