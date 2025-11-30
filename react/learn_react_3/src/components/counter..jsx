// ایمپورت ری‌اکت و کلاس پایه Component از پکیج react
import React, { Component } from "react";

// تعریف یک کلاس به نام Counter که از React.Component ارث‌بری می‌کند
class Counter extends Component {
    // constructor اولین متدی است که هنگام ساختن کامپوننت صدا زده می‌شود
    constructor(props) {
        // صدا زدن constructor والد (Component) تا this و props به‌درستی مقداردهی شود
        super(props);

        // تعریف state ابتدایی کامپوننت
        // در این‌جا فقط یک فیلد داریم: count با مقدار اولیه 0
        this.state = {
            count: 0
        };
    }

    // متد افزایش‌دهنده شمارنده به صورت Arrow Function
    // Arrow بودنش باعث می‌شود this همیشه به همین کامپوننت اشاره کند
    increment = () => {
        // درخواست به ری‌اکت برای آپدیت state
        // مقدار جدید count، مقدار فعلی + 1 است
        this.setState({
            count: this.state.count + 1
        });
    };

    // متد کاهش‌دهنده شمارنده
    // دقیقاً مانند increment است ولی مقدار را کم می‌کند
    decrement = () => {
        // این‌بار count یکی کم می‌شود
        this.setState({
            count: this.state.count - 1
        });
    };

    // متد چرخه حیات: وقتی کامپوننت برای اولین‌بار روی صفحه mount شود صدا زده می‌شود
    componentDidMount() {
        // اینجا می‌توانیم لاگ بگیریم، دیتا بگیریم، تایمر راه بیندازیم و ...
        console.log("Counter mounted for the first time");
    }

    // متد چرخه حیات: بعد از هر آپدیت (تغییر state یا props) صدا زده می‌شود
    componentDidUpdate(prevProps, prevState) {
        // اینجا می‌توانیم ببینیم مقدار قبلی چه بوده و مقدار جدید چیست
        console.log("Counter updated. Previous count:", prevState.count, "Current count:", this.state.count);
    }

    // متد چرخه حیات: دقیقاً قبل از اینکه کامپوننت از صفحه حذف (unmount) شود اجرا می‌شود
    componentWillUnmount() {
        // جای خوبی برای پاک‌سازی: پاک‌کردن تایمرها، لیسنرها و ...
        console.log("Counter will be unmounted");
    }

    // متد اجباری هر کلاس کامپوننت: مشخص می‌کند روی صفحه چه چیزی رندر شود
    render() {
        // همیشه باید یک JSX برگرداند
        return (
            // روت کامپوننت: یک div که همه‌چیز داخل آن قرار می‌گیرد
            <div>
                {/* نمایش مقدار فعلی count از داخل state کامپوننت */}
                <h2>Count: {this.state.count}</h2>

                {/* دکمه افزایش: با کلیک روی آن تابع increment صدا زده می‌شود */}
                <button onClick={this.increment}>افزایش</button>

                {/* دکمه کاهش: با کلیک روی آن تابع decrement صدا زده می‌شود */}
                <button onClick={this.decrement}>کاهش</button>
            </div>
        );
    }
}

// خروجی گرفتن کامپوننت تا بتوانیم در فایل‌های دیگر (مثلاً App.js) از آن استفاده کنیم
export default Counter;
//
// در کلاس ها ممکنه به این ارور بر خوریم که this شناخته نشود پس از بایند کردن استفاده میکنیم
// که داحل کانستراکتور گذاشته میشود
// constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//
//     this.handleClick = this.handleClick.bind(this);
// }
// این bind مقدار this را به instance کامپوننت قفل می‌کند
//
// یعنی هر جا handleClick اجرا شود، this همیشه همان Counter است
// راه حل دوم اینکه از Arrow Function استفاده کنیم
// Arrow Function ها this جدید نمی‌سازند.
// پس this داخل آن همیشه همان this کلاس است
// مثال
// import React, { Component } from "react";
//
// class EventsDemo extends Component {
//     // constructor برای مقداردهی اولیه state
//     constructor(props) {
//         super(props);
//
//         // state شامل یک شمارنده و یک متن
//         this.state = {
//             count: 0,
//             text: ""
//         };
//     }
//
//     // --- رویداد onClick: افزایش شمارنده ---
//     // Arrow Function → this درست به خود کامپوننت اشاره می‌کند
//     handleIncrement = () => {
//         // افزایش count با استفاده از setState
//         this.setState({
//             count: this.state.count + 1
//         });
//     };
//
//     // --- رویداد onChange: گرفتن مقدار input ---
//     // event به‌صورت خودکار از طرف React پاس داده می‌شود
//     handleInputChange = (event) => {
//         // event.target → همان input
//         // event.target.value → مقدار نوشته شده داخل input
//         this.setState({
//             text: event.target.value
//         });
//     };
//
//     // --- رویداد onSubmit: مدیریت ارسال فرم ---
//     handleSubmit = (event) => {
//         // جلوگیری از رفتار پیش‌فرض فرم (رفرش صفحه)
//         event.preventDefault();
//
//         // استفاده از مقدار موجود در state
//         console.log("Form submitted with text:", this.state.text);
//         // می‌توانیم بعد از ارسال، state را هم خالی کنیم
//         this.setState({ text: "" });
//     };
//
//     // متد render: مشخص می‌کند چه چیزی روی UI نمایش داده شود
//     render() {
//         return (
//             <div>
//                 {/* نمایش شمارنده */}
//                 <h2>Count: {this.state.count}</h2>
//
//                 {/* دکمه‌ی onClick که handleIncrement را صدا می‌زند */}
//                 <button onClick={this.handleIncrement}>افزایش</button>
//
//                 {/* فرم با رویداد onSubmit */}
//                 <form onSubmit={this.handleSubmit}>
//                     {/* input با رویداد onChange */}
//                     <input
//                         type="text"
//                         value={this.state.text}          // کنترل‌شده توسط state
//                         onChange={this.handleInputChange} // هر تغییر → آپدیت state
//                         placeholder="متن را بنویس"
//                     />
//                     <button type="submit">ارسال</button>
//                 </form>
//
//                 {/* نمایش زنده‌ی متن وارد شده */}
//                 <p>متن فعلی: {this.state.text}</p>
//             </div>
//         );
//     }
// }
//
// export default EventsDemo;
// درس بعدی:Conditional Rendering
// چند حالت برای چک کردن شرطها و انتخاب درست ترین کامپوننت وجود دارد اول با if مثال :
// if (isLoggedIn) {
//   return <Dashboard />;
// }
// return <Login />;
// حالت بعدی با& است مثال
// {isAdmin && <AdminPanel />}
// حالت بعدی شرط سه تایی مثال:
// {isLoading ? <Loading /> : <Content />}
// استفاده از متغیر کمکی
// let content;
//
// if (error) {
//   content = <Error />;
// } else {
//   content = <Data />;
// }
//
// return <div>{content}</div>;

