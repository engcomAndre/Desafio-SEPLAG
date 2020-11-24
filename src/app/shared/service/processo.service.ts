import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { FileHandle } from '../dragDrop.directive';
import { Processo } from '../model/processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  url = "https://desafio-seplag.firebaseio.com/processos.json";

  private sbList = new Subject<Processo[]>();
  public sbListObsersable = this.sbList.asObservable();

  processos: Processo[] = [
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
    // { cfpBeneficiario: '1234578912', tipo: "Identidade", documento: "documento", arquivo: "arquivo" },
  ];

  constructor(
    private http: HttpClient,

  ) { }

  onChangeProcessos() {
    return this.sbList.next([...this.processos]);
  }

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.url);
  }

  postProcesso(processo: Processo): Observable<any> {

    this.processos = [...this.processos, processo];
    console.log('DIALOG_PROCESSO', this.processos);
    // return of<Processo[]>(this.processos);
    return this.http.put(this.url, this.processos);
  }

  postFile(files: FileHandle[]): Observable<any> {
    return this.http.put(this.url, files);
  }
}
