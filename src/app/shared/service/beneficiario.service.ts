import { Injectable } from '@angular/core';
import { Beneficiario } from '../model/beneficiario.model';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  url = "https://desafio-seplag.firebaseio.com/beneficiarios.json";

  private sb = new Subject<Beneficiario>();
  private sbList = new Subject<Beneficiario[]>();
  
  public sbObsersable = this.sb.asObservable();
  public sbListObsersable = this.sbList.asObservable();

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


  constructor(
    private http : HttpClient
  ) { }

<<<<<<< HEAD
  getSelectedBeneficiario(row : Beneficiario){
=======
  getSelectedBen(row : Beneficiario){
    console.log("getSelectedBen",row);
>>>>>>> af027ad92295b3b583f4f0586ca67a8fc301c517
    return this.sb.next(row);
  }

  onChangeBeneficiario(){
    return this.sbList.next([...this.beneficiarios]);
  }

  getBeneficiarios(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.url);
  }

  postBeneficiarios(beneficiario: Beneficiario):Observable<Beneficiario[]> {
    this.beneficiarios.push(beneficiario);
    return this.http.put<Beneficiario[]>(this.url,this.beneficiarios);
  }
}
