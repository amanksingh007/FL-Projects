import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucidChartViewerComponent } from './PopUps/lucid-chart-viewer/lucid-chart-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';
import { FormsModule } from '@angular/forms';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { PizzatrackerComponent } from './components/pizzatracker/pizzatracker.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    LucidChartViewerComponent,
    HomeComponent,
    UrlSanitizerPipe,
    ResponsiveComponent,
    PizzatrackerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT5bL9PgH0cgQbAknxpstJa4o4NjkQilU',
    }),
    AgmDirectionModule,
  ],
  providers: [LucidChartViewerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
