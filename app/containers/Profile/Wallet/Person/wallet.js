import React,{PureComponent} from 'react'
import {Table,Icon} from 'antd'
import Walletall from './walletall'
import '../styles.less'

const lists=[{
    'id':'1',
    'account':'Lidy',
    'address':'0x03f2b4d813cfa446450a3bb4f9a64558a0262d97',
    'total':500
},{
    'id':'2',
    'account':'Haoyu',
    'address':'0x03f2b4d813cfa446450a3bb4f9a64558a0262d97',
    'total':900
},{
    'id':'3',
    'account':'Yugedaren',
    'address':'0x03f2b4d813cfa446450a3bb4f9a64558a0262d97',
    'total':600
}];
function ajax(url,method,data){
    let myHeaders=new Headers();
    myHeaders.append('Content-Type','application/json');
    myHeaders.append('Accept','applicate/json');
    let request=new Request(url,
        {
            method:method||'post',
            mode:'no-cors',
            body:JSON.stringify(data),
            headers:myHeaders
        });
    return request;
};
export default class Wallet extends PureComponent{
    constructor(props){
        super(props);
        // this.handleClick1=this.handleClick1.bind(this);
        this.state={
            lists:lists
        };
    }
    componentDidMount(){
        fetch(
            ajax('http://10.104.14.169:8080/bottosapp-0.0.1-SNAPSHOT/user/login?random='+Math.round(Math.random()*100),'post',{
                "name": "testtest",
                "passwd": "123",
                "verificationCode": "123456"
            })
        )
            .then(response=>response.json())
            .then(result=>{
                console.log(result)
            })
            .catch(error=>{
                console.log(error)
            })

    }
    handleClick1(e){
        // console.log(e)
    }
    render(){
        return(
               <div className='wallet'>
                   <header>总额 2000<span>+</span></header>
                   <ul className='wallet_data'>
                       {
                           this.state.lists.map(function(res){
                               return (
                                   <li key={res.id}>
                                       <span className='account'>{res.account}</span>
                                       <span className='address'>{res.address}</span>
                                       <span className='total'>{res.total}</span>
                                   </li>
                               )
                           })
                       }

                   </ul>
               </div>
        )
    }
}