import { Routes } from '@angular/router';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
  { 
    path: 'provider',
    loadComponent: () => import('../components/provider-component/provider.component').then(m => m.ProviderComponent),
    children: [
      { path: 'selphid', loadComponent: () => import('../components/selphid-component/selphid.component').then(m => m.SelphIDComponent) },
      { path: 'selphi', loadComponent: () => import('../components/selphi-component/selphi.component').then(m => m.SelphiComponent) },
    ]
  },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: 'provider/selphid', pathMatch: 'full' }
];
