import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  PageScrollService,
  NgxPageScrollCoreModule,
} from 'ngx-page-scroll-core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: FooterComponent },
  // This path is a fallback when no routes are matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // or 'top'
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
    NgxPageScrollCoreModule,
  ],
  providers: [
    PageScrollService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }, // <-- changed here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
