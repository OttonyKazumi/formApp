import { Component } from '@angular/core';
import {Pessoa, PessoaService} from "../services/pessoa.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  pessoa: Pessoa = { id: 0, nome: '', telefone: '', dataDeNascimento: '' };

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  cadastrarPessoa(): void {
    if (!this.pessoa.nome || !this.pessoa.dataDeNascimento || !this.pessoa.telefone) {
      alert('Preencha todos os campos.');
      return;
    }
    this.pessoa.id = this.pessoaService.getPessoas().length ? Math.max(...this.pessoaService.getPessoas().map(p => p.id)) + 1 : 1;
    this.pessoaService.addPessoa(this.pessoa);
    this.router.navigate(['/listagem']);
  }
}
