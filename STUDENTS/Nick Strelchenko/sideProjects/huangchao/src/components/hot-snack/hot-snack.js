import React from 'react'
import ItemList from '../item-list'

export default class HotSnack extends React.Component{
    objects = [
        {id:1,name:"Баклажаны с мясом",price:500,weight:"250г",desc:"Баклажаны с мясом – Обжаренные в соевом соусе, репчатый лук, болгарский перец, чеснок.",imgUrl:"./baklajani_s_myasom.jpg"},
        {id:2,name:"Баклажаны тушеные",price:650,weight:"250г",desc:"Запеченные баклажаны, куриный фарш, кунжут, зелень.",imgUrl:"./bakladjani_tysheniye.jpg"},
        {id:3,name:"Батат в карамели",price:600,weight:"250г",desc:"Батат, яблоко, апельсин, банан (на выбор) в сахарной карамели..",imgUrl:"./batat_v_karameli.jpg"},
        {id:4,name:"Говядина на сковородке",price:650,weight:"200г",desc:"Говядина, болгарский перец , репчатый и зеленый лук, острый перец.",imgUrl:"./govyadina_na_skovorodke.jpg"},
    ]
    render(){
        return(
            <React.Fragment>
                <ItemList objects={this.objects} />        
            </React.Fragment>
        )
    }
}