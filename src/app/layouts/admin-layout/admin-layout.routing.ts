import { Routes } from '@angular/router';

import { TableauComponent } from '../../pages/tableau/tableau.component';
import { ProduitsComponent } from '../../pages/produits/produits.component';
import { UtilisateursComponent } from '../../pages/utilisateurs/utilisateurs.component';
import { DevisComponent } from '../../pages/devis/devis.component';
import { FactureComponent } from '../../pages/facture/facture.component';
import { ClientsComponent } from 'src/app/pages/clients/clients.component';
import { PaiementComponent } from 'src/app/pages/paiement/paiement.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: 'tableau', component: TableauComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'facture', component: FactureComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'paiement', component: PaiementComponent},
  // { path: "rtl", component: RtlComponent }
];
