import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/shared/dragDrop.directive';
import { ProcessoService } from 'src/app/shared/service/processo.service';

@Component({
  selector: 'app-processo-dialog',
  templateUrl: './processo-dialog.component.html',
  styleUrls: ['./processo-dialog.component.css']
})
export class ProcessoDialogComponent implements OnInit {

  public processoForm: FormGroup;
  file: string;

  name = 'Angular 5';
  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
    
   
  }

  constructor(
    public dialogRef: MatDialogRef<ProcessoDialogComponent>,
    private fb: FormBuilder,
    private processoService: ProcessoService,
    private domSanitizer: DomSanitizer
  ) { }

  upload(): void {
    //get image upload file obj;
    console.log(this.files);
    this.processoService.postProcesso(this.files).subscribe();
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
      'cfpBeneficiario': this.processoForm.value['cfpBeneficiario'],
      'tipo': this.processoForm.value['tipo'],
      'documento': this.processoForm.value['documento']
    }

    this.processoService.postProcesso(processo).subscribe(res => {
      return ''
    });
    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
    this.processoForm.reset();
  }



}
