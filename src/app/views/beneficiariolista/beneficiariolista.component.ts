import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { BeneficiarioDialogComponent } from '../beneficiario/beneficiario-dialog/beneficiario-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-beneficiariolista',
  templateUrl: './beneficiariolista.component.html',
  styleUrls: ['./beneficiariolista.component.css'],
})
export class BeneficiariolistaComponent implements OnInit {

  beneficiarios: Beneficiario[] = [ ];

  displayedColumns: string[] = ['nome', 'cpf', 'orgao', 'matricula', 'actions'];
  dataSource = new MatTableDataSource(this.beneficiarios);

  constructor(
    public dialog: MatDialog,
    private beneficiarioService: BeneficiarioService

  ) { }

  ngOnInit(): void {
    this.getBeneficiarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getBeneficiarios() {
    this.beneficiarioService.getBeneficiarios().subscribe(retBeneficiarioService => {
      this.beneficiarios = [...retBeneficiarioService];
      this.dataSource = new MatTableDataSource([...retBeneficiarioService]);
    });

  }

  initProcess(row: any) {
    this.beneficiarioService.getSelectedBen(row);
  }

  addBeneficiario() {
    const dialogRef = this.dialog.open(BeneficiarioDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBeneficiarios();
    });
  }
}


