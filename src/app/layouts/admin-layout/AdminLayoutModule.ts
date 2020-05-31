import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { TableauComponent } from '../../pages/tableau/tableau.component';
import { ProduitsComponent } from '../../pages/produits/produits.component';
import { UtilisateursComponent } from '../../pages/utilisateurs/utilisateurs.component';
import { DevisComponent } from '../../pages/devis/devis.component';
import { FactureComponent } from '../../pages/facture/facture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientsComponent } from 'src/app/pages/clients/clients.component';
import { PaiementComponent } from 'src/app/pages/paiement/paiement.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    TableauComponent,
    UtilisateursComponent,
    DevisComponent,
    ProduitsComponent,
    FactureComponent,
    ClientsComponent,
    PaiementComponent,

  ]
})
export class AdminLayoutModule {
}
