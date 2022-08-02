import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador!: number;
  @Output() cambiarContador = new EventEmitter();

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }

  multiplicar(){
    this.contador *= 2;
    this.cambiarContador.emit(this.contador);
  }

  dividir(){
    this.contador /= 2;
    this.cambiarContador.emit(this.contador);
  }

  resetNieto(evento: any){
    this.contador = evento;
    this.cambiarContador.emit(this.contador);
  }

}
