import React, {Component} from 'react';
import './App.css';
import User from './User/User'; 

class App extends Component {  
  render(){
    //return (<h1>Komponent klasowy</h1>);
    //return React.createElement('div', null, React.createElement('h1', {className: "Rp-color"}, 'Hello Marek sprzedawca suszarek!'));
    return(
      <div>
        <h1 className="Rp-color">
          Hello Marek sprzedawca suszarek!
        </h1>
        <p>Marek lubi gofry małe</p>
        <User username="Jacek Placek" role="Piekarz">active</User>
        <User username="Felek Melek" role="Rzeźbiarz">inactive</User>
      </div>
    )
  }
}

export default App;