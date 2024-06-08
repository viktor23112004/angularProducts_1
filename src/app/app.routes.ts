import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: '**', component: NotFoundPageComponent}
];
