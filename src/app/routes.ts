import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HtmlToPdfComponent } from './html-to-pdf/html-to-pdf.component';
import { TableEditUpdateComponent } from './table-edit-update/table-edit-update.component';
import { DynamicDropdownComponent } from './dynamic-dropdown/dynamic-dropdown.component';
import { ApiConnectionComponent } from './api-connection/api-connection.component';
import { BooksComponent } from './books/books.component';
import { SearchSwitchComponent } from './search-switch/search-switch.component';
import { NestedDropdownsComponent } from './nested-dropdowns/nested-dropdowns.component';

export const allAppRoutes: Routes = [
    { path: '', component: WeatherComponent },
    { path: 'html', component: HtmlToPdfComponent },
    { path: 'table-edit', component: TableEditUpdateComponent },
    { path: 'dropdown', component: DynamicDropdownComponent },
    { path: 'api-connection', component: ApiConnectionComponent },
    { path: 'books', component: BooksComponent },
    { path: 'search-switch', component: SearchSwitchComponent },
    { path: 'nested-dropdowns', component: NestedDropdownsComponent }
];
