import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const process: { env: { [key: string]: string } };

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
})
export class AppComponent {
}
