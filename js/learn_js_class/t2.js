class Civilization {
    water = true
    gas = true
    food = true
    electricity = true

    // وظیفه متد سازنده چیه؟ ساختن - راه اندازی - تنظیمات اولیه دادن مقدار ورودی ها به پراپرتی هامون (تنظیم اولیه)
    // اکر کلاسی کانستراکتور نداشت یعنی خالی یعنی ورودی نیاز ندارد ولی باید در پس زمینه یک خالی داشته باشد که خود جااواسکریپت یواشکی میسازه اگر ما یادمون بره بسازیمش
    constructor(water, gas, food, electricity) {
        this.water = water
        this.gas = gas
        this.food = food / 10
        this.electricity = electricity * 10
    }

    makeMarket() {

    }

    makeRoad() {

    }
}

let mashhad = new Civilization(10, 10, 10, 10)
mashhad.makeMarket()
mashhad.makeRoad()

class Building extends Civilization {

    // پراپرتی های - مثل متغیر ها هستن ولی در سطح کلاس
    room = "empty"
    roomColor = "red"
    countWindow = 3
    kitchen
    buildingAge

    // توی سطح کلاس نمیشه شرط ایف یا حلقه یا کد نوشت
    // فقط پراپرتی - پراپرتی استاتیک - متد - متد استاتیک - سازنده

    // تابغ سازنده اولیه کلاس ها
    // وقتی از یک کلاس نمونه میاسازیم اول این صدا زده میشود و ورودی ها براش ارسال میشود
    // کاربردش این هست که با ورودی هایی که براش ارسال شده تنظیمات اولیه کلاس را انجام دهد
    constructor(age) {
        // متد سوپر سازنده پدر را صدا میزند
        // اگر سازنده پدر ورودی داشت باید براش جور کنیم حتی اگر نداشته باشیم دادههای مورد نیاز اش را
        super(10,10,10,10)
        // new Civilization(10,10,10,10)

        this.age = age
    }

    // متد خود کلاس
    cleanRoom() {
        this.room = ""
        this.age++
        this.makeMarket()
        Building.maxRoom
    }

    waterPomp() {
        if (this.water === false) {
            throw new Error("we dont have any water")
        }
    }

    // چون makeMarket داخل پدر هم هست و ما اینجا بنویسیم مال ما اولویت قرار میگیرد و هر کسی این متد را صدا بزند مال ما ارا میشود نه مال پدرمان
    makeMarket() {
        // اگر از صفر میخوای باز نویسی کنی .
        // بنویس هر چی دوست داری
    }
    makeRoad() {
        // متد باز نویسی میشه ولی قابلیت های پدر را از روی سوپر برمیداریم یک بار هم اجرا میکنیم
        super.makeRoad();
        // اینجا هم قابلیت های جدید
    }

    // متد های استاتیک را میتوان بدون نمونه ساختن صدا زد. ولی به this دسترسی کامل ندارن و فقط به اون هایی دسترسی دارن که مثل خودشون استاتیک باشند
    static maxRoom = 20

    static checkSoftnessOfSoil() {
        return true
    }

    static cleanBuilding() {
        // اینجا میتونستیم اینو صدا بزنیم جون مثل خودش استاتیک هست و بدون نمونه ساختن میشه ازش استفاده کرد
        this.cleanWeather()
    }

    static cleanWeather() {
        // چون این پراپراتی استاتیک هست پس داخل متد های استاتیک میتونیم بگیریمش
        this.maxRoom
    }
}


if (Building.checkSoftnessOfSoil()) {
    let ourHouse = new Building(10)
    ourHouse.room = "dasdasd"
    ourHouse.kitchen = {
        name: "dasdasd",
        clean: true
    }
    ourHouse.cleanRoom()
}


let dadHouse = new Building(20)
// میتوانیم به پراپرتی های پدر دسترسی داشته باشیم
dadHouse.electricity
dadHouse.room = "dasfsdafsdf"
dadHouse.kitchen = {}
dadHouse.cleanRoom()
dadHouse.waterPomp()

dadHouse.makeMarket()
dadHouse.makeRoad()


momHouse = new Building()


// در اینجا چون نیازی به نیو کردن نبود از متد استاتیک استفاده کرده جاوااسکریپت برای ساخت این
// let dd = Object.values({a: 20})