import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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

  public beneficiario: any;
  public processos: Processo[] = [];
  displayedColumns: string[] = ['cpf','tipo','documento','acoes'];
  dataSource = new MatTableDataSource(this.processos);


  constructor(
    public dialog: MatDialog,
    private processoService : ProcessoService,    
    private beneficiarioService : BeneficiarioService,
  ) { }

  ngOnInit(): void {
    this.beneficiarioService.sbObsersable.subscribe(res => {
      this.beneficiario = res;
    });

    console.log(this.beneficiario);

     this.processoService.getProcessos().subscribe(
       res => {
         this.processos = res;
         this.dataSource = new MatTableDataSource(this.processos);
       }
     ); 

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProcessos(){
    this.processoService.getProcessos().subscribe(
      res => {
        this.processos = res;
      }
    );
  }

 
  visualizarArquivo(){
    console.log("visualizarArquivo");
  }

  addProcesso() {
    const dialogRef = this.dialog.open(ProcessoDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProcessos();
    });
  }

}
