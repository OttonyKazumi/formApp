import { Component, OnInit } from '@angular/core';
import {Pessoa, PessoaService} from "../services/pessoa.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    
    this.pessoaService.getPessoas().subscribe({
      next: (data: Pessoa[]) => {
        this.pessoas = data;
      },
      error: (err) => {
        console.error('Erro ao buscar pessoas: ', err);
        alert('Ocorreu um erro ao carregar a lista de pessoas.');
      }
    })
  }

  navegarParaAdicionar(): void {
    this.router.navigate(['/formulario']);
  }

  visualizarPessoa(id: number): void {
    this.router.navigate(['/visualizacao/', id]);
  }
}
