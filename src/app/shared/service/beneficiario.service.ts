import { Injectable } from '@angular/core';
import { Beneficiario } from '../model/beneficiario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {


  beneficiarios: Beneficiario[] = [
    { nome: "Ian Ricardo Viana", cpf: "52411684606", orgao: "Orgão 001", matricula: "418964865" },
    { nome: "Luiza Elaine Mirella Teixeira", cpf: "27018132398", orgao: "Orgão 002", matricula: "481751439" },
    { nome: "Guilherme Nathan Lopes", cpf: "48934636670", orgao: "Orgão 003", matricula: "286924766" },
    { nome: "Miguel Daniel Leonardo Carvalho", cpf: "77077908208", orgao: "Orgão 001", matricula: "207698958" },
    { nome: "Guilherme Sérgio Kauê Oliveira", cpf: "87106744620", orgao: "Orgão 003", matricula: "330343026" },
    { nome: "Manuel Henrique Victor Farias", cpf: "52411684606", orgao: "Orgão 001", matricula: "307864479" },
    { nome: "Ian Ricardo Viana", cpf: "52411684606", orgao: "Orgão 001", matricula: "418964865" },
    { nome: "Luiza Elaine Mirella Teixeira", cpf: "27018132398", orgao: "Orgão 002", matricula: "481751439" },
    { nome: "Guilherme Nathan Lopes", cpf: "48934636670", orgao: "Orgão 003", matricula: "286924766" },
    { nome: "Miguel Daniel Leonardo Carvalho", cpf: "77077908208", orgao: "Orgão 001", matricula: "207698958" },
    { nome: "Guilherme Sérgio Kauê Oliveira", cpf: "87106744620", orgao: "Orgão 003", matricula: "330343026" },
    { nome: "Manuel Henrique Victor Farias", cpf: "52411684606", orgao: "Orgão 001", matricula: "307864479" },
  ];


  constructor() { }


  getBeneficiarios(): Observable<Beneficiario[]> {
    return Observable.create( (observer: { next: (arg0: Beneficiario[]) => void; complete: () => void; }) => {
      observer.next(this.beneficiarios);
      observer.complete();
  });}
  }

  // postBeneficiarios(beneficiario: Beneficiario) {
  //   this.beneficiarios.push(beneficiario);
  // }
// }
