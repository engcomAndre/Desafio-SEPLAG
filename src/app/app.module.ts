import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
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
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import { BeneficiariolistaComponent } from './views/beneficiariolista/beneficiariolista.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { BeneficiarioDialogComponent } from './views/beneficiario/beneficiario-dialog/beneficiario-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { DragDirective } from './shared/dragDrop.directive';
import { ProcessoDialogComponent } from './views/processo/processo-dialog/processo-dialog.component';
import { MovimentacoesDialogComponent } from './views/movimentacoes/movimentacoes-dialog/movimentacoes-dialog.component';
import { LocalDateTimePipePipe } from './shared/pipe/local-date-time-pipe.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeneficiarioComponent,
    ProcessoComponent,
    MovimentacoesComponent,
    BeneficiariolistaComponent,
    BeneficiarioDialogComponent,
    ProcessoDialogComponent,
    DragDirective,
    MovimentacoesDialogComponent,
    LocalDateTimePipePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
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
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    

  ],
  providers: [LocalDateTimePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
