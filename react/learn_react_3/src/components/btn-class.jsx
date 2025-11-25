import {Component} from "react";

export default class BtnClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "amir"
        }

        fetch('https://fakestoreapi.com/products/1')
            .then(res => console.log(res.json()))

    }


    componentDidMount() {
        console.log("componentDidMount")
        // زمان اجرا میشود که کامپوننت در صفحه نمایش داده شد
        // برای اولین بار
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
        // زمانی اجرا میشود که کامپوننت به روز شده
        // با تغییر هر استیت یا هر چیزی که ری رینر میکنه
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        // زمانی اجرا می شود که کامپوننت از صفحه حذف شود
    }

    render() {

        return <div style={{color: "red"}}>
            This is btn class
            <div onClick={() => {
                this.setState({
                    ...this.state,
                    count: this.state.count + 1,
                })
            }}>
                count : {this.state.count}
            </div>

            <div>
                current state name : {this.state.name}
            </div>
            BtnClass

            : {this.props.name}
            ---- {this.props.age}
            ---{this.props.edu}
            ---{this.props.brothers.map(x => " and " + x)}
        </div>;
    }

}
