import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProcessoComponent } from 'src/app/views/processo/processo.component';
import { Processo } from '../model/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  processos: Processo[] = [
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
    { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento" },
  ];

  constructor() { }

  getProcessos() : Observable<Processo[]>{
    return of<Processo[]>(this.processos);
  }

  postProcesso(processo: Processo) {
    this.processos.push(processo);
    console.log(this.processos);
  }
}
