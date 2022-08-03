import { Component,   OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import {  MultiplicarActions, DividirActions } from '../contador.actions';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  contador!: number;


  constructor(  private store: Store<AppState>  ) {
    // code
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe( state =>
      this.contador = state
      )
  }

  multiplicar(){
    const action = new MultiplicarActions(5)
    this.store.dispatch(action);
  }

  dividir(){
    const action = new DividirActions(5)
    this.store.dispatch(action);
  }

  resetNieto(evento: any){
    this.contador = evento;
    //this.cambiarContador.emit(this.contador);
  }

}
