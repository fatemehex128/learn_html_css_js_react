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
