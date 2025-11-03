let myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let myObj = {
    name: 'amir',
    age: 20,
    education: 'bachelor',
    city: 'tehran',
    job: 'programmer',
}


// آموزش for in
// این نوع مدل از حلقه ها هر بار یک ایندکس از هر خونه را به ما میدهد
for (let key in myArr) {
    // در اینجا هر بار که وارد این بخش از کد میشویم در متغیر key  یک index از خونه های ارایه به ما داده میشود
    console.log(`this is index : ${key} of myArray`)
    // در این نوع حلقه در صورتی که نیاز به مقدار آن خونه از آرایه را داشته باشیم
    // روش دریافت یک خونه آرایه به این شکل میباشد myArr[0]
    // پس اکنون میتوانیم به جای صفر متغیر key را بزاریم که هر بار یک index از خونه آرایه میباشد
    // console.log(myArr[2])
    console.log(myArr[key])
}

for (let key in myObj) {
    console.log(`this is my key : ${key} of myObj`)
}

// آموزش for of