import React,{PureComponent} from 'react'
import { Carousel,Button } from 'antd';

export default class BTAssetDetail extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <div className="detailContentStyle">
                <div style={{width:300,height:300}}>
                    <Carousel autoplay>
                        <div style={{backgroundColor:'red',width:300,height:300}}></div>
                        <div style={{backgroundColor:'blue',width:300,height:300}}></div>
                        <div style={{backgroundColor:'green',width:300,height:300}}></div>
                    </Carousel>
                </div>

                <div style={{padding:20}}>
                    <p><span style={{fontSize:15,fontWeight:'bold'}}>需求ID:</span>2378979948237498237423947329</p>
                    <p><span style={{fontSize:15,fontWeight:'bold'}}>资产类型:</span>Audio</p>
                    <p><span style={{fontSize:15,fontWeight:'bold'}}>期望价格:</span>20~50</p>
                    <p><span style={{fontSize:15,fontWeight:'bold'}}>下架时间:</span>2017-8-18</p>
                    <p><span style={{fontSize:15,fontWeight:'bold'}}>特征标签:</span>便宜、实用、有价值</p>
                    
                    <div>
                        <Button type="primary">购买</Button>
                    </div>
                </div>

                
            </div>
            <div style={{padding:20}}>
                        <p><span style={{fontSize:15,fontWeight:'bold'}}>详细描述:</span>区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。所谓共识机制是区块链系统中实现不同节点之间建立信任、获取权益的数学算法[1]  。
    区块链（Blockchain）是比特币的一个重要概念，货币联合清华大学五道口金融学院互联网金融实验室、新浪科技发布的《2014—2016全球比特币发展研究报告》提到区块链是比特币的底层技术和基础架构[2]  。
    本质上是一个去中心化的数据库，同时作为比特币的底层技术。区块链是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一次比特币网络交易的信息，
    用于验证其信息的有效性（防伪）和生成下一个区块</p>

                </div>
            </div>
        )
    }
}