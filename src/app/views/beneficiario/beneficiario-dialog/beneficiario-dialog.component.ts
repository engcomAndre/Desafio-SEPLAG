import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';

@Component({
  selector: 'app-beneficiario-dialog',
  templateUrl: './beneficiario-dialog.component.html',
  styleUrls: ['./beneficiario-dialog.component.css']
})
export class BeneficiarioDialogComponent implements OnInit {

  public beneficiarioForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<BeneficiarioDialogComponent>,
    private fb: FormBuilder,
    private benficiarioService : BeneficiarioService
  ) { }

  ngOnInit(): void {
    this.beneficiarioForm = this.fb.group(
      {
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        orgao: ['', [Validators.required]],
        matricula: ['', [Validators.required]],
        processo: ['', [Validators.required]],
      }
    );
  }
  createBeneficiario(){
    console.log("createBeneficiario");

    // const novoBeneficiario =    

    // this.benficiarioService.postBeneficiarios()


  }

  cancel(): void {
    this.dialogRef.close();
    this.beneficiarioForm.reset();
  }


}
