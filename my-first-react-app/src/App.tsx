import React, { Component } from 'react';
import './App.css';

interface State {
  magassag: Number;
  suly: Number;

}
class App extends Component {}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      magassag: new Number(),
      suly: new Number(),
    }
  }
  sulymegadasa = (e: ChangeEvent) => {
    let ujSuly = parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      suly: ujSuly
    });
  }
  magassagmegadas = (e: ChangeEvent) => {
    let ujmagassag = parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      suly: ujmagassag
    });
  }};

function App() {
  return (
    <div className='App'>
      <div id='orange'>
        <br />
    <label>Irja be cm-ben számított testmagasságát (cipő nélkül) </label>
    <input type="number" name="" id="magassag" /> Cm<br />
    <label>Irja be kg-ban számított testsúlyát (cipő nélkül) </label>
    <input type="number" name="" id="suly" /> Kg<br />
    <button id='szamitas'>Számítás</button><br />
    <br />
    </div>
    <h2 id='BMIertek' style={{color:"orange", textAlign:'left'}}>Az ön BMI értéke: 0</h2>
    <p>18,5 vagy kevesebb --- SOVÁNY</p>
    <p>18,5-24,9 ------------ NORMÁL</p>
    <p>25-29,9 ------------- TÚLSÚLY</p>
    <p>30-34,9 ----- 1. FOKÚ ELHÍZÁS</p>
    <p>35-39,9 ------ 2.FOKÚ ELHÍZÁS</p>
    <p>40 vagy több - 3.FOKÚ ELHÍZÁS</p>

<h2>Az ideális testtömege: 0 KG</h2>
    </div>
  );
}
export default App;
