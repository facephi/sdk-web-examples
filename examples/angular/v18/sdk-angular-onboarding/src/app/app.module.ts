import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppModule as FacephiModule } from '@facephi/sdk-web-angular';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SelphIDComponent } from '../components/selphid-component/selphid.component';
import { SelphiComponent } from '../components/selphi-component/selphi.component';
import { FinishComponent } from '../components/finish-component/finish.component';

@NgModule({
	declarations: [AppComponent, SelphIDComponent, SelphiComponent, FinishComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), FacephiModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
