import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input() contador!: number;
  @Output() cambiarContador = new EventEmitter();

  constructor() {
    // code
  }

  ngOnInit(): void {
    // code
  }


  reset(){
    this.contador = 0;
  this.cambiarContador.emit(this.contador);
  }

}
