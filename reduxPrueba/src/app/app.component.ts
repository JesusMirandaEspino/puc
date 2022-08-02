import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';


interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public contador!: number;


  title = 'reduxPrueba';

  constructor( private store: Store<AppState> ){
    //this.contador = 10;
    this.store.subscribe( state =>
      this.contador = state.contador
      )
  }



  incrementar(){
    //this.contador++;
    const accion: Action = {
      type: 'incrementar'
    }
    this.store.dispatch(accion);
  }


  decrementar(){
    //this.contador--;
    const accion: Action = {
      type: 'decrementar'
    }
    this.store.dispatch(accion);
  }

}
