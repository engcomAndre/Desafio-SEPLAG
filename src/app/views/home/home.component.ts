import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public LOGO = ("../../shared/assets/no_image.png");


  // public servidorForm: FormGroup;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.servidorForm = this.fb.group({
    //   servidorName: ['', [Validators.required]],
    //   servidorCpf: ['', [Validators.required]],
    //   servidorOrgao: ['', [Validators.required]],
    //   servidorMatrícula: ['', [Validators.required]]
      
    // });
  }

}
