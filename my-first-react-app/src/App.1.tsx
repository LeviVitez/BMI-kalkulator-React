import { Component } from 'react';
import { State } from './App';

export class App extends Component<{}, State> {



  constructor(props: {}) {

    super(props);



    this.state = {
      magassag: new Number(),

      suly: new Number(),
    };

  }



  sulymegadasa = (e: ChangeEvent) => {

    let ujSuly = parseInt((e.currentTarget as HTMLInputElement).value);

    this.setState({
      suly: ujSuly
    });

  };



  magassagmegadas = (e: ChangeEvent) => {

    let ujmagassag = parseInt((e.currentTarget as HTMLInputElement).value);

    this.setState({
      suly: ujmagassag
    });

  };
}
