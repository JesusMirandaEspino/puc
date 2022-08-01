import { Component, OnInit } from '@angular/core';
import {  PersonDB } from '../interfaces/user';
import { UsersService } from '../services/users.service';
import { ColDef } from 'ag-grid-community';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface-crud',
  templateUrl: './interface-crud.component.html',
  styleUrls: ['./interface-crud.component.scss']
})
export class InterfaceCrudComponent implements OnInit {

    columnDefs: ColDef[] = [
        {
          headerName: 'Id',
          field: '_id'
        },
        {
          headerName: 'Name',
          field: 'first_name'
        },
        {
          headerName: 'Last Name',
          field: 'last_name'
        },
        {
          headerName: 'Email',
          field: 'email'
        },
        {
          headerName: 'Gender',
          field: 'gender'
        },
        {
          headerName: 'Ip Address',
          field: 'ip_address'
        },
        {
          headerName: 'Value',
          field: '__v'
        }
    ];


nuevaPersona: FormGroup  = this.fb.group({
  first_name: [ '', [Validators.required, Validators.minLength(3)  ] ],
  last_name: [ '', [ Validators.required, Validators.minLength(3) ]],
  email: [ '', [ Validators.required, Validators.email]],
  gender: [ '', [Validators.required, Validators.minLength(3)  ] ],
  ip_address: [ '', [ Validators.required, Validators.minLength(6) ] ]

  });

  public rowData$ : PersonDB[] = [];


  constructor( private userServices: UsersService, private fb: FormBuilder ) {
    // code
  }

  ngOnInit(): void {

    this.userServices.getUsersDB().subscribe( users => {
      this.rowData$ = users.users;
    });

  }


  nombreValido(campo: string){
    return this.nuevaPersona.controls[campo].errors && this.nuevaPersona.controls[campo].touched
  }

  guardar(){

    if( this.nuevaPersona.invalid ){
      this.nuevaPersona.markAllAsTouched();
      return;
    }
      this.nuevaPersona.reset();
  }


}
