import { Routes } from '@angular/router';
import { ProviderComponent } from '../components/provider-component/provider.component';
import { SelphiComponent } from '../components/selphi-component/selphi.component';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
	{
		path: '',
		component: ProviderComponent,
		children: [{ path: '', component: SelphiComponent }],
	},
	{ path: 'finish', component: FinishComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];
