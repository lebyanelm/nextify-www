import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'onboarding/pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then((m) => m.PricingPageModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsPageModule
      ),
  },
  {
    path: 'onboarding/custom-pricing',
    loadChildren: () =>
      import('./pages/custom-pricing/custom-pricing.module').then(
        (m) => m.CustomPricingPageModule
      ),
  },
  {
    path: 'integrations',
    loadChildren: () =>
      import('./pages/intergrations/intergrations.module').then(
        (m) => m.IntergrationsPageModule
      ),
  },
  {
    path: 'about-company',
    loadChildren: () =>
      import('./pages/about-company/about-company.module').then(
        (m) => m.AboutCompanyPageModule
      ),
  },
  {
    path: 'cooming-soon',
    loadChildren: () =>
      import('./pages/cooming-soon/cooming-soon.module').then(
        (m) => m.CoomingSoonPageModule
      ),
  },
  {
    path: 'empowered-cities',
    loadChildren: () =>
      import('./pages/empowered-cities/empowered-cities.module').then(
        (m) => m.EmpoweredCitiesPageModule
      ),
  },
  {
    path: 'legal/terms-and-conditions',
    loadChildren: () =>
      import(
        './pages/legal/terms-and-conditions/terms-and-conditions.module'
      ).then((m) => m.TermsAndConditionsPageModule),
  },
  {
    path: 'legal/privacy-policy',
    loadChildren: () =>
      import('./pages/legal/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
