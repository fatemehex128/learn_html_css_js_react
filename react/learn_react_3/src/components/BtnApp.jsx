import BtnFunc from "./btn-func.jsx";
import BtnClass from "./btn-class.jsx";

function BtnApp() {
    return (
        <>
            {/*برای صدا زدن فانکشن های ری اکتی پراتز نمیخواد باید مثل تگ صداشون بزنی و اگر ورودی داشتن مثل اتربییوت ها براش بفرستی*/}
            <BtnFunc name={"amir"} age={20} edu={"master"} brothers={["ahmadreza", "mohammad"]}/>
            {/*==*/}
            {/*BtnFunc("amir",20)*/}
            <hr/>
            {/*برای صدا زدن کلاس های معمولی باید new میکردیم تا یک نمونه ازش ساخته شود- ولی برای کلاس های ری اکتی مثل تگ صداش میزنیم خودش در پشت صحنه نمونه ازش میسازه و اگر کانسترکتورش ورودی میخواست مثل اتریبیوت میفرستیم براش*/}
            <BtnClass name={"fatemeh"} age={30} edu={"master"} brothers={["ahmadreza", "mohammad"]}/>
            {/*==*/}
            {/*new BtnClass("fatemeh",20)*/}
        </>
    );
}

export default BtnApp;

// روش ارسال ورودی به تابع های معمولی و ری اکتی
// function xxx(a,b){
//
// }
//
//
// xxx(19,20)
//
//
// function xxxReact({name, age}){
//
// }
//
// <xxxReact name="amir" age="20"/>