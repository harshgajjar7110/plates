import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { LanguageComponent } from './Components/Language/Language.component';
import { BoilerplateComponent } from './Components/boilerplate/boilerplate.component';
import {FormsModule} from '@angular/forms';
import { ApiService } from './Services/Api.service';
const routes: Routes = [
  { path: '', component: LanguageComponent },
  {path: 'language/:id', component: BoilerplateComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageComponent,
    BoilerplateComponent
],
  imports: [
    BrowserModule,
FormsModule,    RouterModule.forRoot(routes),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
