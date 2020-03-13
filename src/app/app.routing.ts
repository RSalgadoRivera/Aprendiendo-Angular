import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from './externo/externo.component';
//importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { TenisComponent } from './tenis/tenis.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
//Array de rutas
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tenis',
        component: TenisComponent
    },
    {
        path: 'videojuego',
        component: VideojuegoComponent
    },
    /*{
        path: 'cursos/:nombre/:apellidos',
        component: CursosComponent
    },*/
    {
        path: 'cursos/:nombre/:followers',
        component: CursosComponent
    },
    {
        path: 'cursos/:nombre',
        component: CursosComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
    {
        path: 'externo',
        component: ExternoComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);