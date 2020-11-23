import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { BeneficiarioDialogComponent } from '../beneficiario/beneficiario-dialog/beneficiario-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-beneficiariolista',
  templateUrl: './beneficiariolista.component.html',
  styleUrls: ['./beneficiariolista.component.css']
})
export class BeneficiariolistaComponent implements OnInit {



  beneficiarios: Beneficiario[] = [
    // { nome: "Ian Ricardo Viana", cpf: "52411684606", orgao: "Orgão 001", matricula: "418964865" },
    // { nome: "Luiza Elaine Mirella Teixeira", cpf: "27018132398", orgao: "Orgão 002", matricula: "481751439" },
    // { nome: "Guilherme Nathan Lopes", cpf: "48934636670", orgao: "Orgão 003", matricula: "286924766" },
    // { nome: "Miguel Daniel Leonardo Carvalho", cpf: "77077908208", orgao: "Orgão 001", matricula: "207698958" },
    // { nome: "Guilherme Sérgio Kauê Oliveira", cpf: "87106744620", orgao: "Orgão 003", matricula: "330343026" },
    // { nome: "Manuel Henrique Victor Farias", cpf: "52411684606", orgao: "Orgão 001", matricula: "307864479" },
    // { nome: "Ian Ricardo Viana", cpf: "52411684606", orgao: "Orgão 001", matricula: "418964865" },
    // { nome: "Luiza Elaine Mirella Teixeira", cpf: "27018132398", orgao: "Orgão 002", matricula: "481751439" },
    // { nome: "Guilherme Nathan Lopes", cpf: "48934636670", orgao: "Orgão 003", matricula: "286924766" },
    // { nome: "Miguel Daniel Leonardo Carvalho", cpf: "77077908208", orgao: "Orgão 001", matricula: "207698958" },
    // { nome: "Guilherme Sérgio Kauê Oliveira", cpf: "87106744620", orgao: "Orgão 003", matricula: "330343026" },
    // { nome: "Manuel Henrique Victor Farias", cpf: "52411684606", orgao: "Orgão 001", matricula: "307864479" },
  ];


  displayedColumns: string[] = ['nome', 'cpf', 'orgao', 'matricula', 'actions'];
  dataSource = new MatTableDataSource(this.beneficiarios);



  constructor(
    public dialog: MatDialog,
    private beneficiarioService: BeneficiarioService

  ) { }

  ngOnInit(): void {
    this.getBeneficiarios();
    this.dataSource = new MatTableDataSource(this.beneficiarios);

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getBeneficiarios(){
    this.beneficiarioService.getBeneficiarios().subscribe(retBeneficiarioService =>{
      this.beneficiarios = retBeneficiarioService;
      console.log(retBeneficiarioService);
    });

  }

  initProcess(row: any) {
    console.log(row);
  }

  addBeneficiario() {
    const dialogRef = this.dialog.open(BeneficiarioDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


