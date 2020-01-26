  
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'
import './style.css'

import Messages from './components/Messages/Messages.jsx'


let user = 'It'

ReactDOM.render (
   <Messages user={ user }/>,
   document.getElementById('root'),
)










// import Messages from './components/Messages/Messages.jsx'
// import Child from './components/testcomp/testcomp.jsx'

// let user = 'It'

// ReactDOM.render (
//    <Messages user={ user }/>,
//    document.getElementById('root'),
// )

// ReactDOM.render (
//    <Child str="Hello component from props"/>,
//    document.getElementById('root'),
// )








// let msgs = ['Go pogamaem','Net']

// let Messages = (props) => {
//     let messages = props.ms.map(m => <p>{ m }</p>)
//     return (<div>
//     { messages }
//     </div>)
// }

// let handleClick = () => {
//     msgs.push('Norm')
//     ReactDom.render(
//         <App />,
//         document.querySelector('#root')
//     )
// }


// let App = () => 
// <div>
//     <h1>React chat</h1>
//     <Messages ms = { msgs } />
//     <button onClick= { handleClick }>Add</button>
// </div>

// ReactDom.render (
//     <App />,
//     document.querySelector('#root')
// )

//part 1
// const el = <h1 className="element">Some react here</h1>

// ReactDom.render(
//     el,
//     document.getElementById('app')
// )