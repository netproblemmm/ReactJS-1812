import React from 'react'
import './yandex-map.css'

export default class YandexMap extends React.Component{
    render(){
        return(
            <iframe title="yandexmap"  src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=186405352501" width='100%' height='400px'></iframe>
        )
    }
}