import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Processo } from '../model/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  url = "https://desafio-seplag.firebaseio.com/processos.json";


  processos: Processo[] = [
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
  ];

  constructor(
    private http: HttpClient
  ) { }

  getProcessos() : Observable<Processo[]>{
    return this.http.get<Processo[]>(this.url);
  }

  postProcesso(processo: Processo) {
    this.http.put(this.url,processo);
  }
}
