import { PeticionesService } from './../services/peticiones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: number;
  public fecha: any;
  public usuario_guardado: any;
  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService,     
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
  };
  }

  ngOnInit(): void {
    this.fecha = new Date(2019,5,20);
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
      },
      error =>{
        console.error(<any>error);
      }
    );
  }
  onSubmit(form: any){
    this._peticionesService.addUser(this.new_user).subscribe(
      result =>{
        this.usuario_guardado = result;
        form.reset();
      },
      error => {
        console.error(error);
      }
    );
  }

}
