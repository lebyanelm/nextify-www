import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'onboarding/pricing',
    loadChildren: () => import('./pages/pricing/pricing.module').then( m => m.PricingPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'onboarding/custom-pricing',
    loadChildren: () => import('./pages/custom-pricing/custom-pricing.module').then( m => m.CustomPricingPageModule)
  },
  {
    path: 'integrations',
    loadChildren: () => import('./pages/intergrations/intergrations.module').then( m => m.IntergrationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
