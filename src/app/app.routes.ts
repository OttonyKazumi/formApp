import { Routes } from '@angular/router';
import {TelaComponent} from "./visualizacao/visualizacao.component";
import {FormularioComponent} from "./formulario/formulario.component";
import {ListagemComponent} from "./listagem/listagem.component";

export const routes: Routes = [
    { path: 'visualizacao', component: TelaComponent },
    { path: 'visualizacao/:id', component: TelaComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'listagem', component: ListagemComponent },
    { path: '', redirectTo: 'listagem', pathMatch: 'full' }
];
