import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
import { OrgaoService } from 'src/app/shared/service/orgao.service';

interface Orgao {
  nome: string;
}

@Component({
  selector: 'app-beneficiario-dialog',
  templateUrl: './beneficiario-dialog.component.html',
  styleUrls: ['./beneficiario-dialog.component.css'],

})
export class BeneficiarioDialogComponent implements OnInit {

  public beneficiarioForm: FormGroup;

  public orgaos: Orgao[] = [];

  constructor(
    public dialogRef: MatDialogRef<BeneficiarioDialogComponent>,
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService,
    private orgaoService: OrgaoService
  ) { }

  ngOnInit(): void {
    this.beneficiarioForm = this.fb.group(
      {
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        orgao: ['', [Validators.required]],
        matricula: ['', [Validators.required]],
      }
    );
    
    this.orgaoService.getOrgaos().subscribe(res => {
      this.orgaos = res;
    })
  }

  createBeneficiario() {
    const beneficiario = {
      'nome': this.beneficiarioForm.value['nome'],
      'cpf': this.beneficiarioForm.value['cpf'],
      'orgao': this.beneficiarioForm.value['orgao'].nome,
      'matricula': this.beneficiarioForm.value['matricula'],
    }

    this.beneficiarioService.postBeneficiarios(beneficiario).subscribe(res => {
      this.beneficiarioService.onChangeBeneficiario();
    });
    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
    this.beneficiarioForm.reset();
  }
}
