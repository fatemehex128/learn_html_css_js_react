import {useState} from 'react'
// برای نمایش confetti از این پکیج استفاده میکنیم
import Confetti from 'react-confetti-boom'

// این یک کامپوننت ری اکت است که صفحه ورود (Login) را نمایش میدهد
// کامپوننت یعنی یک تابع که تگ‌های HTML شبیه ری اکت را return میکند
export function Login() {
    // برای ذخیره مقدار ایمیل که کاربر وارد میکند از useState استفاده میکنیم
    // useState یک آرایه برمیگرداند که:
    // خونه اول: مقدار فعلی متغیر (email)
    // خونه دوم: تابعی برای تغییر مقدار (setEmail)
    // مقدار اولیه را داخل useState قرار میدهیم که در اینجا یک رشته خالی است
    let [email, setEmail] = useState('')
    
    // برای ذخیره مقدار پسورد که کاربر وارد میکند
    // همانند email، یک state برای password میسازیم
    let [password, setPassword] = useState('')
    
    // برای کنترل نمایش confetti از یک state استفاده میکنیم
    // وقتی true باشد confetti نمایش داده میشود
    let [showConfetti, setShowConfetti] = useState(false)
    
    // این تابع زمانی اجرا میشود که کاربر روی دکمه ورود کلیک میکند
    let handleLogin = () => {
        // اول confetti را نمایش میدهیم
        // setShowConfetti(true) باعث میشود که showConfetti به true تغییر کند
        // و صفحه مجدد رندر شود و confetti نمایش داده شود
        setShowConfetti(true)
        
        // بعد از یک لحظه confetti را مخفی میکنیم (اختیاری - برای اینکه confetti فقط یک بار نمایش داده شود)
        // setTimeout یک تابع است که بعد از مدت زمان مشخص (به میلی‌ثانیه) یک تابع را اجرا میکند
        // 3000 یعنی 3 ثانیه
        setTimeout(() => {
            setShowConfetti(false)
        }, 3000)
        
        // حالا یک alert نمایش میدهیم که ایمیل و پسورد کاربر را نشان دهد
        // alert یک تابع مرورگر است که یک پیام را در یک پنجره popup نمایش میدهد
        alert(`ایمیل: ${email}\nپسورد: ${password}`)
    }
    
    // این تابع زمانی اجرا میشود که کاربر در input ایمیل چیزی تایپ میکند
    // event یک شی است که اطلاعات رویداد را در خود دارد
    // event.target.value مقدار فعلی input است
    let handleEmailChange = (event) => {
        // مقدار input را در state email ذخیره میکنیم
        setEmail(event.target.value)
    }
    
    // این تابع زمانی اجرا میشود که کاربر در input پسورد چیزی تایپ میکند
    let handlePasswordChange = (event) => {
        // مقدار input را در state password ذخیره میکنیم
        setPassword(event.target.value)
    }
    
    // این بخش JSX است که HTML شبیه ری اکت را برمیگرداند
    return (
        <div style={{padding: '20px', maxWidth: '400px', margin: '50px auto'}}>
            {/* اگر showConfetti true باشد، کامپوننت Confetti را نمایش میدهیم */}
            {/* && یک عملگر منطقی است که اگر سمت چپ true باشد، سمت راست را اجرا میکند */}
            {showConfetti && <Confetti mode="fall"/>}
            
            {/* عنوان صفحه */}
            <h1>ورود به سیستم</h1>
            
            {/* فرم ورود */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {/* Input برای ایمیل */}
                {/* 
                    onChange: زمانی که مقدار input تغییر کند این تابع اجرا میشود
                    value: مقدار فعلی input که از state email میآید
                    type="email": نوع input را email تعیین میکند که مرورگر اعتبارسنجی ایمیل را انجام دهد
                    placeholder: متن راهنما که وقتی input خالی است نمایش داده میشود
                */}
                <input 
                    type="email" 
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}
                />
                
                {/* Input برای پسورد */}
                {/* 
                    type="password": نوع input را password تعیین میکند که کاراکترها به صورت نقطه نمایش داده شوند
                */}
                <input 
                    type="password" 
                    placeholder="پسورد خود را وارد کنید"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}
                />
                
                {/* دکمه ورود */}
                {/* 
                    onClick: زمانی که کاربر روی دکمه کلیک کند این تابع اجرا میشود
                    type="button": نوع دکمه را button تعیین میکند (نه submit که باعث reload صفحه میشود)
                */}
                <button 
                    onClick={handleLogin}
                    type="button"
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    ورود
                </button>
            </div>
        </div>
    )
}


