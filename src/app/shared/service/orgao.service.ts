import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Orgao } from '../model/orgao.model';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService {

  public orgaos: Orgao[] = [
    { nome: 'Orgão 001' },
    { nome: 'Orgão 002' },
    { nome: 'Orgão 003' },
    { nome: 'Orgão 004' }
  ];

  constructor() { }

  getOrgaos() : Observable<Orgao[]>{
    return of<Orgao[]>(this.orgaos);
  }
}
