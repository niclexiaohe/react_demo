import React,{Component} from "react"

export default class CommentInput extends Component{

    constructor(props){
        console.log("执行构造函数...");
        super(props);
        //初始化state方式1（推荐），方式2先执行，执行完毕后执行构造方法中的this.state，重新覆盖了方式2.因此，这两种初始化state的方式只能选择一种，不能同时存在！
        this.state = {
            userName:"张 三",
            age:18
        }
    }
    //初始化state方式2
    state = {
        userName:"张一三",
        age:19
    }

    //组件将要创建
    componentWillMount(){
        console.log("组件将要创建...");
    }

    render(){
        console.log("组件正在创建...");
        return(
            <div>
                <div>
                    <span><span>用户名：</span>{this.state.userName}</span>
                </div>
                <div>
                    <span><span>年龄：</span>{this.state.age}</span>
                </div>
            </div>
        );
    }

    componentDidMount(){
        console.log("组件已经创建...");
        window.setInterval(()=>{
            this.setState({
                userName:"李四",
                age:this.state.age + 1
            });
        },5*1000);
    }

    componentWillReceiveProps(nextProps){
        console.log("props改变，componentWillReceiveProps会被调用");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("返回true,则允许更新；返回false,则不允许更新");
        nextState.age = 0;//这里可以修改新的state
        // this.setState({//这种方式设置state会进入死循环
        //     age:100
        // });
        return true;
    }

    //nextProps:新的props，nextState：新的state
    componentWillUpdate(nextProps,nextState){
        nextState.age = 0;//这里可以修改新的state
        // this.setState({//这种方式设置state会进入死循环
        //     age:100
        // });
        console.log("组件将要更新...");
    }

    componentDidUpdate(){
        console.log("组件已经更新完成...");
    }

    componentWillUnmount(){
        console.log("组件将被销毁...");
    }
}