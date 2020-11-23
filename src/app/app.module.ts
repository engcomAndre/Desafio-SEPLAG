import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { HomeComponent } from './views/home/home.component';
=======
>>>>>>> dbd99a7cc1996e065edcd61b76e4220502ea4645
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { MatDividerModule } from '@angular/material/divider';
=======
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDividerModule } from '@angular/material/divider';
import { BeneficiarioComponent } from './views/beneficiariolista/beneficiario/beneficiario.component';
import { ProcessoComponent } from './views/processo/processo.component';
import { PecasComponent } from './views/pecas/pecas.component';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import { BeneficiariolistaComponent } from './views/beneficiariolista/beneficiariolista.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { BeneficiarioDialogComponent } from './views/beneficiario/beneficiario-dialog/beneficiario-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


>>>>>>> dbd99a7cc1996e065edcd61b76e4220502ea4645


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent
=======
    HomeComponent,
    BeneficiarioComponent,
    ProcessoComponent,
    PecasComponent,
    MovimentacoesComponent,
    BeneficiariolistaComponent,
    BeneficiarioDialogComponent,

>>>>>>> dbd99a7cc1996e065edcd61b76e4220502ea4645
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
<<<<<<< HEAD
    MatDividerModule,
=======
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule


>>>>>>> dbd99a7cc1996e065edcd61b76e4220502ea4645
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
