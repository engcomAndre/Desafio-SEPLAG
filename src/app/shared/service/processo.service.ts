import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Subject } from 'rxjs/internal/Subject';
import { FileHandle } from '../dragDrop.directive';
import { Processo } from '../model/processo.model';
import { AngularFireStorage } from '@angular/fire/storage';



export interface FilesUploadMetadata {
  uploadProgress$: any;// Observable<number>;
  downloadUrl$: Observable<string>;
}

@Injectable({
  providedIn: 'root',

})
export class ProcessoService {

  url = "https://desafio-seplag.firebaseio.com/processos.json";

  private sbList = new Subject<Processo[]>();
  public sbListObsersable = this.sbList.asObservable();


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/pdf'
    })
  }

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
    private storage: AngularFireStorage) { }


  onChangeProcessos() {
    return this.sbList.next([...this.processos]);
  }

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.url);
  }

  postProcesso(processo: Processo): Observable<any> {

    this.processos = [...this.processos, processo];
    console.log('DIALOG_PROCESSO', this.processos);

    const file = processo.arquivo;
    const filePath = processo.arquivo.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    return this.http.put(this.url, this.processos,);
  }



  postFile(files: FileHandle[]): Observable<any> {
    return this.http.put(this.url, files);
  }

}
