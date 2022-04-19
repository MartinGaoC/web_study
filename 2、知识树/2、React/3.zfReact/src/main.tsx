// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


import React from 'react';
import ReactDOM from 'react-dom';
// 旧模式 渲染同步
ReactDOM.render(<h1>hello</h1>, document.getElementById('root'));

// 
// ReactDOM.createRoot(document.getElementById('root')!).render(<h1>Hello</h1>)