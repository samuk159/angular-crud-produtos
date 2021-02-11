import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrecoPipe } from './preco.pipe';
import { FormsModule } from '@angular/forms';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecoPipe,
    ListaDeProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
