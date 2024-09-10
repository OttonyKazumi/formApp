import { Component, OnInit } from '@angular/core';
import {Pessoa, PessoaService} from "../services/pessoa.service";
import {Router} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [
    HttpClientModule,
    NgIf
  ],
  templateUrl: './visualizacao.component.html',
  styleUrl: './visualizacao.component.css'
})
export class TelaComponent implements OnInit {
  pessoa: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.pessoaService.getPessoaById(id).subscribe({
        next: (data: Pessoa) => {
          this.pessoa = data;
        },
        error: (err) => {
          console.error('Erro ao buscar pessoa:', err);
        }
      });
    });
  }

  voltarParaLista(): void {
    this.router.navigate(['/listagem']);
  }
}