import { Zapato } from './../models/zapato';
import { Injectable } from "@angular/core";


@Injectable()
export class TenisService {
    public zapatos: Array<Zapato>;
    constructor() { 
        this.zapatos = [
            new Zapato('Reebok Classic', 'Reebok', 'Blanco', 60, true),
            new Zapato('Vans Classic', 'Vans', 'Blanco', 80, true),
            new Zapato('Reebok Classic', 'Reebok', 'Rojos', 195.5, false),
            new Zapato()
        ];  
    }
    getTexto(): string{
        return 'Hola mundo desde un servicio';
    }

    getZapatos(): Array<Zapato>{
        return this.zapatos;
    }
}
