import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';
import { Movimentacoes } from '../model/movimentacoes.model';
import { BeneficiarioService } from './beneficiario.service';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

  url = "https://desafio-seplag.firebaseio.com/movimentacoes.json";

  movimentacoes: Movimentacoes[] = [ ];

  private sbList = new Subject<Movimentacoes[]>();
  public sbListObsersable = this.sbList.asObservable();

  constructor(
    private http: HttpClient
  ) { }


  getMovimentacoes(): Observable<Movimentacoes[]> {
    return this.http.get<Movimentacoes[]>(this.url);
  }

  onChangeMovimentacoes() {
    return this.sbList.next([...this.movimentacoes]);
  }

  postMovimentacoes(movimentacao: Movimentacoes): Observable<Movimentacoes[]> {
    this.movimentacoes = [...this.movimentacoes, movimentacao];
    return this.http.get<Movimentacoes[]>(this.url);
  }
}
