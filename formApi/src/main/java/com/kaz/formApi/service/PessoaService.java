package com.kaz.formApi.service;

import com.kaz.formApi.model.Pessoa;
import com.kaz.formApi.persistence.PessoaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    PessoaDao pessoaDao;

    public List<Pessoa> findAll(){
        return pessoaDao.findAll();
    }

    public Pessoa findById(Integer id){
        return pessoaDao.findById(id).orElseThrow(() -> new RuntimeException("Id invalido!"));
    }

    public Pessoa save(Pessoa pessoa){
        return pessoaDao.save(pessoa);
    }
}
