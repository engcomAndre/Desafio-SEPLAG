import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { Processo } from 'src/app/shared/model/processo.model';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
import { ProcessoService } from 'src/app/shared/service/processo.service';
import { ProcessoDialogComponent } from './processo-dialog/processo-dialog.component';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  public beneficiario: Beneficiario;
  public processos: Processo[] = [];
  displayedColumns: string[] = ['tipo', 'documento', 'acoes'];
  dataSource = new MatTableDataSource(this.processos);


  constructor(
    public dialog: MatDialog,
    private processoService: ProcessoService,
    private beneficiarioService: BeneficiarioService,
  ) { }

  ngOnInit(): void {
    this.processoService.sbListObsersable.subscribe(resProcessos => {
      this.processos = resProcessos.filter(r => {
        return r.cfpBeneficiario === this.beneficiario.cpf;
      });
      this.dataSource = new MatTableDataSource(this.processos);
    });

    this.beneficiarioService.sbObsersable.subscribe(res => {
      this.beneficiario = res;

      if (this.beneficiario) {
        this.processoService.getProcessos().subscribe(
          resProcessos => {
            if (resProcessos) {
              this.processos = resProcessos.filter(r => {
                return r.cfpBeneficiario === this.beneficiario.cpf;
              });
              this.dataSource = new MatTableDataSource(this.processos);
            }
          }
        );
      }
      else {
        this.processoService.getProcessos().subscribe(
          resProcessos => {
            this.processos = resProcessos;
            this.dataSource = new MatTableDataSource(this.processos);
          }
        );
      }
    });
    this.dataSource = new MatTableDataSource(this.processos);



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProcessos() {
    this.processoService.getProcessos().subscribe(
      res => {
        this.processos = res;
      }
    );
  }

  visualizarArquivo() {
    console.log("visualizarArquivo");
  }

  addProcesso() {
    const dialogRef = this.dialog.open(ProcessoDialogComponent, {
      minWidth: '400px',
      data: { beneficiarioCpf: this.beneficiario.cpf }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.processoService.sbListObsersable.subscribe(res => {
        this.processos = res;
      });
    });
  }

}
