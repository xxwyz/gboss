/*登录组件*/
import React from 'react'
import  {NavBar,WhiteSpace,List,InputItem,WingBlank,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends React.Component{
    state={
        name:'',
        pwd:''
    };

    goRegister=()=>{
        this.props.history.replace('/register')
    };
    login=()=>{
        console.log(JSON.stringify(this.state))
    };
    handleChange=(name,value)=>{
        this.setState({[name]:value})
    };
    render(){
        return(
            <div>
                <NavBar>硅 谷 直 聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem onChange={val=>this.handleChange('name',val)}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={val=>this.handleChange('pwd',val)}>密码:</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登录</Button>
                        <Button onClick={this.goRegister}>没有账号</Button>
                    </List>
                </WingBlank>

            </div>
        )
    }
}