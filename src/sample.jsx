import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName, StylesProvider } from '@material-ui/styles'
// import logo from './logo.svg';
import AppRouter from './AppRouter.jsx';
import './App.css';

const Name = createGenerateClassName({ productionPrefix: 'c'})
const App = () => {
  return (
  <StylesProvider generateClassName={Name}>
    <CssBaseline />
    <AppRouter />
  </StylesProvider>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
