import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Processo } from '../model/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  url = "https://liveagenda-c25b8.firebaseio.com/processos.json";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  processos: Processo[] = [
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
  ];

  constructor(
    private httpclient: HttpClient

  ) { }

  getProcessos() : Observable<Processo[]>{
    return of<Processo[]>(this.processos);
  }

  postProcesso(processo: any) {
    this.processos.push(processo);
   return this.httpclient.put(this.url,processo);
  }
}
