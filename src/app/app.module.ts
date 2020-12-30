import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from "ngx-bootstrap/modal";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucidChartViewerComponent } from './PopUps/lucid-chart-viewer/lucid-chart-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LucidChartViewerComponent,
    HomeComponent,
    UrlSanitizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [LucidChartViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
