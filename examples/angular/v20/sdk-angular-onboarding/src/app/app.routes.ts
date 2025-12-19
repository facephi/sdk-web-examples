import { Routes } from '@angular/router';
import { ProviderComponent } from '../components/provider-component/provider.component';
import { SelphIDComponent } from '../components/selphid-component/selphid.component';
import { SelphiComponent } from '../components/selphi-component/selphi.component';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
  { 
    path: 'provider',
    component: ProviderComponent,
    children: [
      { path: 'selphid', component: SelphIDComponent},
      { path: 'selphi', component: SelphiComponent},
    ]
  },
  { path: 'finish', component: FinishComponent},
  { path: '**', redirectTo: 'provider/selphid', pathMatch: 'full' }
];
