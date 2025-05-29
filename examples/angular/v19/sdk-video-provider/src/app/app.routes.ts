import type { Routes } from '@angular/router';
import { SelphiComponent } from '../components/selphi-component/selphi.component';
import { SelphIDComponent } from '../components/selphid-component/selphid.component';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
	{ path: 'finish', component: FinishComponent },
	{ path: 'selphi', component: SelphiComponent },
	{ path: 'selphid', component: SelphIDComponent },
];
