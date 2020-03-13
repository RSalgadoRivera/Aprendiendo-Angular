import { Zapato } from './../models/zapato';
import { Component, OnInit } from "@angular/core";
import { TenisService } from '../services/tenis.service';

@Component({
    selector:'zapato',
    templateUrl: './tenis.component.html',
    styleUrls:['./tenis.component.css']
})
export class TenisComponent implements OnInit{
    public titulo: string = 'Componente de Tenis';
    public zapatos: Array<Zapato>;
    public  marcas: Array<string>;
    public color: string;
    public mi_marca: string;
    constructor(
        private _tenisService: TenisService
    ) {
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatos = _tenisService.getZapatos();
    }
    ngOnInit(){
    console.log(this.zapatos);
    this.getMarcas();
    }
    getMarcas(){
        this.zapatos.forEach((zapato, index)=>{
            //this.marcas[index] = zapato.marca;
            if(this.marcas.indexOf(zapato.marca) < 0){
                this.marcas.push(zapato.marca); 
            }
        });
        console.log(this.marcas);
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
        this.mi_marca = "";
    }
    borrarMarca(indice: number){
        //delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }
    onBlur(){
        console.log('has salido del input');
    }
    mostrarPalabra(){
        alert(this.mi_marca);
    }
}