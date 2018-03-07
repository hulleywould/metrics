import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { LeftTableComponent } from './metrics/left-table/left-table.component';
import { RightTableComponent } from './metrics/right-table/right-table.component';
import { BigTableComponent } from './metrics/big-table/big-table.component';
import { MetricsComponent } from './metrics/metrics.component';
import { PresetsComponent } from './metrics/presets/presets.component';
import { TablesComponent } from './metrics/tables/tables.component';
import { PricingSummaryComponent } from './metrics/tables/pricing-summary/pricing-summary.component';
import { HedgingComponent } from './metrics/tables/hedging/hedging.component';
import { TableChoiceComponent } from './metrics/table-choice/table-choice.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftTableComponent,
    RightTableComponent,
    BigTableComponent,
    MetricsComponent,
    PresetsComponent,
    TablesComponent,
    PricingSummaryComponent,
    HedgingComponent,
    TableChoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
