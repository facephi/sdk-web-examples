import type { Routes } from '@angular/router';
import { VideoIDComponent } from '../components/video-id-component/video-id.component';
import { FinishComponent } from '../components/finish-component/finish.component';

export const routes: Routes = [
	{ path: 'finish', component: FinishComponent },
	{ path: 'video-id', component: VideoIDComponent },
	{ path: '**', redirectTo: 'video-id' },
];
