import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public LOGO = ("../../shared/assets/no_image.png");

  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.navLinks = [
      {
        label: 'Processos',
        link: './processos',
        index: 0
      }, {
        label: 'Pecas',
        link: './pecas',
        index: 1
      }, {
        label: 'Movimentacoes',
        link: './movimentacoes',
        index: 2
      },
    ];

  }


  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
    
  }

}
