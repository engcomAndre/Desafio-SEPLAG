import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/shared/dragDrop.directive';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
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

  public processoForm: FormGroup;

  public tipoDocumentos: string[] = [
    "Identificação",
    "Vida Funcional",
    "Contagem de tempo",
    "Remuneração/ Proventos"
  ];

  file: string;

  name = 'Angular 5';
  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  constructor(
    public dialogRef: MatDialogRef<ProcessoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private domSanitizer: DomSanitizer
  ) { }


  upload(): void {
    this.processoService.postFile(this.files);
  }

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

  createProcesso() {
    const processo = {
      'cfpBeneficiario': this.data.beneficiarioCpf,
      'tipo': this.processoForm.value['tipo'],
      'documento': this.processoForm.value['documento'],
      'arquivo': this.processoForm.value['arquivo']      
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
