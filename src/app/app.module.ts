import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatToolbarModule, MatAutocompleteModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatButtonToggleModule, MatTooltipModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule, MatNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { TableEditUpdateComponent } from './table-edit-update/table-edit-update.component';
import { MaterialComponent } from './material/material.component';
import { DynamicDropdownComponent } from './dynamic-dropdown/dynamic-dropdown.component';
import { ApiConnectionComponent } from './api-connection/api-connection.component';
import { BooksComponent } from './books/books.component';
import { SearchSwitchComponent } from './search-switch/search-switch.component';
import { NestedDropdownsComponent } from './nested-dropdowns/nested-dropdowns.component';
import { AgmCoreModule } from '@agm/core';
import { GeocodeService } from './nested-dropdowns/geocode.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HtmlToPdfComponent,
    TableEditUpdateComponent,
    MaterialComponent,
    DynamicDropdownComponent,
    ApiConnectionComponent,
    BooksComponent,
    SearchSwitchComponent,
    NestedDropdownsComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXp0lh0iF-CK-wHPpSqYRV8IOHaJN3XNk'
      // Google Maps API key
    })
  ],
  providers: [
    ApixuService,
    GeocodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
