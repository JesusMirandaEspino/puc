import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonDB, Person } from '../interfaces/user';
import { UsersService } from '../services/users.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interface-crud',
  templateUrl: './interface-crud.component.html',
  styleUrls: ['./interface-crud.component.scss']
})

export class InterfaceCrudComponent implements OnInit {


// https://www.ag-grid.com/javascript-data-grid/cell-editing/


// https://www.ag-grid.com/javascript-data-grid/components/

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

    personToEdit: any;


    gridOptions: GridOptions = {

    columnDefs:  [
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
    ],
        defaultColDef: {
            flex: 1,
            minWidth: 110,
            editable: true,
            resizable: true,
          },
          onCellEditingStarted: (_event:any) => {
            this.personToEdit = _event.data;
            console.log('cellEditingStarted', this.personToEdit, ' id:  '  ,   this.personToEdit.gender);
          },
    }





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
