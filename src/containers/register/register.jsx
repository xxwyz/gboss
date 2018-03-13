/*注册主件*/
import React from 'react'
import  {NavBar,WhiteSpace,List,InputItem,WingBlank,Radio,Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const RadioItem = Radio.RadioItem;
export default class Register extends React.Component{
    state={
      name:'',
      pwd:'',
      pwd2:'',
      type:'boss'
    };

    goLogin=()=>{
      this.props.history.replace('/login')
    };
    register=()=>{
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
                        <InputItem type='password'
                                   onChange={val=>this.handleChange('pwd2',val)}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={()=>this.handleChange('type','boss')}>Boss</RadioItem>
                        <Button type='primary' onClick={this.register}>注册</Button>
                        <Button onClick={this.goLogin}>已有账号</Button>
                    </List>
                </WingBlank>

            </div>
        )
    }
}