import { Routes } from '@angular/router';
import { ProviderComponent } from '../components/provider-component/provider.component';
import { FileUploaderComponent } from '../components/file-uploader-component/file-uploader.component';
import { SelphiComponent } from '../components/selphi-component/selphi.component';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
    children: [
      { path: '', component: FileUploaderComponent },
      { path: 'selphi', component: SelphiComponent },
    ],
  },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
