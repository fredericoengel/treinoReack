
//import Oifdp from './components/Oifdp'

import './App.css';


export default function App() {
  const title = 'BEM VINDO AO REACT FDP DOS INFERNO!';
  const likes = 50;
  const nome = 'Frederico Engel';
  const idade = 40;
  return (
    <div className='App'>
      <div className='content'>
        <h1>{ title }</h1>
        <p> Liked {likes} times</p>
        <p> Meu nome é { nome } e tenho {idade} anos.</p>
      </div>
    </div>
  )
}



