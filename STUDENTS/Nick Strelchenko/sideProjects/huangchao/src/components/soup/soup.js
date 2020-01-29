import React from 'react'
import ItemList from '../item-list'

export default class Soup extends React.Component{
    objects = [
        {id:1,name:"Кислая капуста котелок",price:650,weight:"250г",desc:"Суп, свинина с кислой капустой, зелень, зеленый лук.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/kislaya_kapysta_kotelok.jpg"},
        {id:2,name:"Лапша с говядиной",price:350,weight:"100г",desc:"Говядина, зелень, лук.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/lapsha_s_govyadinoy.jpg"},
        {id:3,name:"Суп из утки",price:600,weight:"300г",desc:"Картошка, морковь, репчатый лук, китайские специи.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/syp_iz_ytki.jpg"},
        {id:4,name:"Тушеные ребрышки с грибами Моэр",price:650,weight:"300г",desc:"Суп с древесными грибами.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/tyshenniye_rebrishki_s_gribami_moer.jpg"},
    ]
    render(){
        return(
            <React.Fragment>
                <ItemList objects={this.objects} />        
            </React.Fragment>
        )
    }
}