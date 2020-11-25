import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { Orgao } from 'src/app/shared/model/orgao.model';
import { MovimentacoesService } from 'src/app/shared/service/movimentacoes.service';
import { OrgaoService } from 'src/app/shared/service/orgao.service';
import { DialogData } from '../../processo/processo-dialog/processo-dialog.component';

@Component({
  selector: 'app-movimentacoes-dialog',
  templateUrl: './movimentacoes-dialog.component.html',
  styleUrls: ['./movimentacoes-dialog.component.css']
})
export class MovimentacoesDialogComponent implements OnInit {

  public orgaos: Orgao[] = [];
  beneficiario: Beneficiario;

  public movimentacaoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MovimentacoesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private movimentacaoService: MovimentacoesService,
    private orgaoService: OrgaoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.movimentacaoForm = this.fb.group(
      {
        origem: ['', [Validators.required]],
        destino: ['', [Validators.required]],
      });

    this.orgaoService.getOrgaos().subscribe(res => {
      this.orgaos = res;
    })

    if (this.data.destino) {

      this.movimentacaoForm.controls['origem'].setValue(this.orgaos.find(s => {
        return s.nome == this.data.destino;
      }));
    }
  }


  createMovimentacao() {

    const movimentacao = {
      'cpf': this.data.beneficiarioCpf,
      'data': new Date(),
      'origem': this.movimentacaoForm.value['origem'].nome,
      'destino': this.movimentacaoForm.value['destino'].nome,
      'usuario': 'logged user'
    }

    this.movimentacaoService.postMovimentacoes(movimentacao).subscribe(res => {
      this.movimentacaoService.onChangeMovimentacoes();
    });
    this.cancel();
  }

  cancel(): void {
    this.dialogRef.close();
    this.movimentacaoForm.reset();
  }

}
