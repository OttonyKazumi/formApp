package com.kaz.formApi.controller;

import com.kaz.formApi.model.Pessoa;
import com.kaz.formApi.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RequestMapping("/")
@RestController
@CrossOrigin("*")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping("/formulario")
    public ResponseEntity<Pessoa> cadastrarPessoa(@RequestBody Pessoa pessoa){
        Pessoa p = pessoaService.save(pessoa);
        return ResponseEntity.ok(p);
    }

    @GetMapping("/listagem")
    public ResponseEntity<List<Pessoa>> listagemPessoas(){
        List<Pessoa> lista = pessoaService.findAll();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/visualizacao/{id}")
    public ResponseEntity<Pessoa> findPessoaById(@PathVariable Integer id){
        try{
            Pessoa pessoa = pessoaService.findById(id);
            return ResponseEntity.ok(pessoa);
        }catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
