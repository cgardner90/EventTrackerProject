import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FossilListComponent } from './components/fossil-list/fossil-list.component';
import { FossilService } from './services/fossil.service';
import { HttpClientModule } from '@angular/common/http';
import { FossilComponent } from './components/fossil/fossil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FossilListComponent,
    FossilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FossilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
