import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/app/shared/model/beneficiario.model';
import { BeneficiarioService } from 'src/app/shared/service/beneficiario.service';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {

  public beneficiario: any;

  constructor(
    private beneficiarioService : BeneficiarioService,    
  ) { }

  ngOnInit(): void {
    this.beneficiarioService.sbObsersable.subscribe(res => {
      this.beneficiario = res;
      console.log("beneficiario",res);
    });
  }

}
