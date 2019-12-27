import React from 'react';
import ReactDOM from 'react-dom';
import nstyle from './normalize.scss';
import style from './style.scss';

import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Chanels from './components/Chanels/Chanels.jsx'
import Chat from './components/Chat/Chat.jsx'

let user = 'It'

ReactDOM.render (
   <div className="root-container">
      <header className="header">
         <Header />
      </header>
      <main className="main">
         <Chanels/>
         <Chat/>
      </main>
      <footer className="footer">
         <Footer />
      </footer>
   </div>,
   document.getElementById('root'),
)

