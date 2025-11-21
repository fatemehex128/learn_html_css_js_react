function useState(initialValue) {
    let value = initialValue

    function setValue(newValue) {
        value = newValue
        forceUpdate()
    }

    return [value, setValue]
}


let [count, setCount] = useState(10)

setCount(50)





// hook function
// تابع ای که یک یا چند تابع به ما بده که ما بعدا صدا بزنیم
function useAuth() {
    function login() {
        fetch("http://localhost:8080/loggin")
    }

    function register() {
        fetch("http://localhost:8080/loggin")
    }

    function forget() {
        fetch("http://localhost:8080/loggin")
    }

    function reset() {
        fetch("http://localhost:8080/loggin")
    }

    return [login, register, forget, reset]
}

let [login] = useAuth()


// callback function
// اگر تابعی به یک تابع بدیم که اون بعدا صدا بزنه
function OnClick(x) {
//   یک فرایندی اتفاق مثلا می افتاد بهد تابع ما را صدا میزند
    x({
        target: document.getElementById(""),
        a: ""
    })
}

OnClick(e => console.log())