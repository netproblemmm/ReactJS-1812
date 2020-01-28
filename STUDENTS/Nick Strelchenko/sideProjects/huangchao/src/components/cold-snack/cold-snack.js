import React from 'react'
import ItemList from '../item-list'
export default class ColdSnack extends React.Component{
    objects = [
        {id:1,name:"Копченая курица",price:600,weight:"350г",desc:"Копченая курица по рецепту древне - китайских поваров.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/kopchenaya_kyritsa.jpg"},
        {id:2,name:"Отварная курица в остром соусе Чили",price:600,weight:"200г",desc:"Куриное филе, соевый соус, кунжут, соль, зелень, масло перца.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/otvarnaya_kyritsa_v_ostrom_soyse_chili.jpg"},
        {id:3,name:"Рулет из говядины",price:600,weight:"200г",desc:"Говяжий рулет с китайскими специями.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/rylet_iz_govyadini.jpg"},
        {id:4,name:"Свиной желудок тушенный",price:550,weight:"200г",desc:"Говяжий желудок, соль, сахар, соевый соус, острое масло, зелень.",imgUrl:"https://huangchao.ru/media/products/2019/06/04/svinnoy_jelydok_tyshenniy.jpg"},
    ]
    render(){
        
        return(
            <React.Fragment>
                <div>
                    {document.documentElement.clientWidth>=1000 ? (
                        <p>More than 1000 {document.documentElement.clientWidth}</p>
                    ):(
                        <p>LEss than 1000 {document.documentElement.clientWidth}</p>
                    )}     
            
                </div>
                <ItemList objects={this.objects} />        
            </React.Fragment>
            
         )   
    }
}