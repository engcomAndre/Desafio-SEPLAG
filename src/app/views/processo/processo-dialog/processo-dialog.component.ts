import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { ProcessoService } from 'src/app/shared/service/processo.service';


export interface DialogData {
  destino: any;
  beneficiarioCpf: string;
}

@Component({
  selector: 'app-processo-dialog',
  templateUrl: './processo-dialog.component.html',
  styleUrls: ['./processo-dialog.component.css']
})
export class ProcessoDialogComponent implements OnInit {

  beneficiario: Beneficiario;

  private loadeddFile :File;

  public processoForm: FormGroup;

  public tipoDocumentos: string[] = [
    "Identificação",
    "Vida Funcional",
    "Contagem de tempo",
    "Remuneração/ Proventos"
  ];


  constructor(
    public dialogRef: MatDialogRef<ProcessoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private domSanitizer: DomSanitizer
  ) { }


  getResource(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(url));
  }

  ngOnInit(): void {

    this.processoForm = this.fb.group(
      {
        cfpBeneficiario: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
        documento: ['', [Validators.required]],
        arquivo: ['', [Validators.required]]
      }
    );
  }

  loadFile(event: Event) {
    let file;

    if (event.target) {
      file = (<HTMLInputElement>event.target).files;
    }
      if (file){
        this.loadeddFile = file[0] ;
      }

  }

  createProcesso() {
    const processo = {
      'cfpBeneficiario': this.data.beneficiarioCpf,
      'tipo': this.processoForm.value['tipo'],
      'documento': this.processoForm.value['documento'],
      'arquivo': this.loadeddFile
    }



    this.processoService.postProcesso(processo).subscribe(res => {
      this.processoService.onChangeProcessos();
    });

    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
    this.processoForm.reset();
  }
}
