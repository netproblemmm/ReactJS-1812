import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'


import Messages from './components/Messages/Messages.jsx'
import Child from './components/testcomp/testcomp.jsx'

let user = 'It'

ReactDOM.render (
  <Messages user={ user }/>,
  document.getElementById('root'),
)

// ReactDOM.render (
//   <Child str="Hello component from props"/>,
//   document.getElementById('root'),
//  )

// msgs = ['Hello', 'How are you?']

// let Messages = (props) =>  {
//    let messages = props.ms.map (m => <p>{ m }</p>)
//    return (
//    <div> 
//       { messages }
//     </div>
//     )
// }

// let handleClick = () => {
//    msgs.push ('Нормально')
//    ReactDOM.render (
//       <App />,
//       document.querySelector ('#root')
//    )
// }

// let App = () => <div>
// <h1>React chat</h1>
// <Messages ms = { msgs }/>
// <button onClick = { handleClick }>AddMsg</button>
// </div>

// ReactDOM.render (
// <App />,
// document.querySelector ('#root')
// )
//msg (comp)
//msg Wrapper (comp - cont)
// method addMsg
// render



// const element = <h1 className="element">Some React here</h1>;

// ReactDOM.render(
//    element,
//    document.getElementById('root'),
// );