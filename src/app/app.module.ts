import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SharedComponentsModule} from './components/shared-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TableService} from './services/table.service';
import {AppService} from './app.service';
import {TableDataInterceptor} from './interceptor/table-data.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
  ],
  providers: [AppService, TableService,
    {provide: HTTP_INTERCEPTORS, useClass: TableDataInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
