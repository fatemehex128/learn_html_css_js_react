import {useState} from "react";

export default function Quiz() {

    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState("")

    return <div dir="rtl">
        <div>
            <h1>آیا به نظر خودت مشکلات روحی روانی ای که داری چقدر ریشع در کودکی دارد ؟</h1>
            <label>
                کم
                <input
                    onChange={(e)=>setQuestion1(e.target.value)}
                    name="question1"
                    value="low"
                    type="radio"/>
            </label>

            <label>
                متوسط
                <input
                    onChange={(e)=>setQuestion1(e.target.value)}
                    name="question1"
                    value="medium"
                    type="radio"/>
            </label>

            <label>
                بیشتر
                <input
                    onChange={(e)=>setQuestion1(e.target.value)}
                    name="question1"
                    value="high"
                    type="radio"/>
            </label>

            <label>
                بسیار بیشتر
                <input
                    onChange={(e)=>setQuestion1(e.target.value)}
                    name="question1"
                    value="veryHigh"
                    type="radio"/>
            </label>
        </div>

        <div>
            <h1>آیا به نظر خودت مشکلات روحی روانی ای که داری چقدر ریشع در کودکی دارد ؟</h1>
            <label>
                کم
                <input
                    onChange={(e)=>setQuestion2(e.target.value)}
                    name="question2"
                    value="low"
                    type="radio"/>
            </label>

            <label>
                متوسط
                <input
                    onChange={(e)=>setQuestion2(e.target.value)}
                    name="question2"
                    value="medium"
                    type="radio"/>
            </label>

            <label>
                بیشتر
                <input
                    onChange={(e)=>setQuestion2(e.target.value)}
                    name="question2"
                    value="high"
                    type="radio"/>
            </label>

            <label>
                بسیار بیشتر
                <input
                    onChange={(e)=>setQuestion2(e.target.value)}
                    name="question2"
                    value="veryHigh"
                    type="radio"/>
            </label>
        </div>

        <hr/>

        answer quiz 1
        <h1>{question1}</h1>

        answer quiz 2
        <h1>{question2}</h1>
        <hr/>

    </div>
}   