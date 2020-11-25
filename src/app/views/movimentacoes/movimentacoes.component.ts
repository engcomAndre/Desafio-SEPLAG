import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { Movimentacoes } from 'src/app/shared/model/movimentacoes.model';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
import { MovimentacoesService } from 'src/app/shared/service/movimentacoes.service';
import { MovimentacoesDialogComponent } from './movimentacoes-dialog/movimentacoes-dialog.component';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.css']
})
export class MovimentacoesComponent implements OnInit {

  beneficiario: Beneficiario;
  movimentacoes: Movimentacoes[] = [];
  tempMovimentacao: Movimentacoes;

  displayedColumns: string[] = ['data', 'origem', 'destino', 'usuario', 'acoes'];
  dataSource = new MatTableDataSource(this.movimentacoes);

  constructor(
    public dialog: MatDialog,
    private movimentacoesService: MovimentacoesService,
    private beneficiarioService: BeneficiarioService
  ) { }

  ngOnInit(): void {
    this.movimentacoesService.sbListObsersable.subscribe(resProcessos => {
      this.movimentacoes = resProcessos.filter(r => {
        return r.cpf === this.beneficiario.cpf;
      });
      this.dataSource = new MatTableDataSource(this.movimentacoes);
    });

    this.beneficiarioService.sbObsersable.subscribe(res => {
      this.beneficiario = res;
      if (this.beneficiario) {
        this.movimentacoesService.getMovimentacoes().subscribe(
          resMovimentacoes => {
            if (resMovimentacoes) {
              this.movimentacoes = resMovimentacoes.filter(r => {
                return r.cpf == this.beneficiario.cpf;
              });
              console.log("MOVI", this.movimentacoes);
              this.dataSource = new MatTableDataSource(this.movimentacoes);
            }
          }
        );
      }
      else {
        this.movimentacoesService.getMovimentacoes().subscribe(
          resProcessos => {
            this.movimentacoes = resProcessos;
          }
        );
      }
    });
    this.dataSource = new MatTableDataSource(this.movimentacoes);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addMovimentacao() {
    const dialogRef = this.dialog.open(MovimentacoesDialogComponent, {
      minWidth: '400px',
      data: { beneficiarioCpf: this.beneficiario.cpf }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.movimentacoesService.sbListObsersable.subscribe(res => {
        this.movimentacoes = res;
      });
    });

  }

  cancel() {
    const dialogRef = this.dialog.open(MovimentacoesDialogComponent, {
      minWidth: '400px',
      data: { beneficiarioCpf: this.beneficiario.cpf }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.movimentacoesService.sbListObsersable.subscribe(res => {
        this.movimentacoes = res;

      });
    });

  }

  tramitar() {
    const dialogRef = this.dialog.open(MovimentacoesDialogComponent, {
      minWidth: '400px',
      data: { beneficiarioCpf: this.beneficiario.cpf, destino: this.tempMovimentacao.destino }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.movimentacoesService.sbListObsersable.subscribe(res => {
        this.movimentacoes = res;
      });
    });

  }

  selectMovimentacao(row: Movimentacoes) {
    this.tempMovimentacao = row;
  }

}
