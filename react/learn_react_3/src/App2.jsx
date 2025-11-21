import {useState} from "react";

export default function () {

    // تابع useState  همیشه آرایه برمیگرداند
    // دوتا خونه داره ارایه اش
    // let taskList = useState(["amir"])
    // taskList[0] // مقدار داده ما
    // taskList[1] // یک تابغ برای ست کردن مقدار

    let [taskList, setTaskList] = useState([])
    let [task, setTask] = useState("")
    let [color, setColor] = useState("")


    return <div>
        <div>
            {/* تمامی ایونت هایی مثل onClick و onChange یک ادرس تابع از ما میخواند - هر وقت ان اتفاق می افتاد تابع ما را صدا میزند و در ورودی برایش یک آرگومان ارسال میکند اگر ان را بگیریم داخلش یک سری اطلاعات مفید در مورد ان تاگ داخلش به شکل یک آبجکت هست از جمله خود Dom آن تگ ای که رویش event اتفال افتاده است*/}
            {/*مبحث two way binding به فرایند برداشتن اطلاعات از روی اینپوت و ست کردن اطلاعات روی اینپوت گفته میشود*/}

            <div>
                <input
                    onChange={(e) => setTask(e.target.value)}
                    value={task}

                    type="text"
                    placeholder={"Enter Your Task"}
                />
            </div>
            <div>
                <input
                    onChange={(e) => setColor(e.target.value)}
                    value={color}

                    type="color"/>
            </div>

            <div>
                <button onClick={() => {
                    if (color === "") {
                        color = randomColor()
                    }

                    setTaskList([...taskList, {task: task, color: color}])
                    setTask("")
                    setColor("")
                }}>
                    Add
                </button>
            </div>
        </div>
        <div>
            <ul>
                {taskList.map((x, index) => <li style={{color: x.color}} key={index}>{x.task}</li>)}
            </ul>
        </div>
    </div>


}

function randomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}