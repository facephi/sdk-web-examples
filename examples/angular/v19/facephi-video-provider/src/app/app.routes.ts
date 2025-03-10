import type { Routes } from '@angular/router';
import { SelphiComponent } from '../components/selphi-component/selphi-component.component';
import { SelphIDComponent } from '../components/selphid-component/selphid-component.component';
import { FinishComponent } from '../components/finish-component/finish-component.component';

export const routes: Routes = [
	{ path: 'finish', component: FinishComponent },
	{ path: 'selphi', component: SelphiComponent },
	{ path: 'selphid', component: SelphIDComponent },
];
