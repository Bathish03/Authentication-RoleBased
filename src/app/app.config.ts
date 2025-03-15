import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), // Add this to provide the animations
    provideRouter(routes),
    importProvidersFrom(
      ToastrModule.forRoot({
        preventDuplicates: true
      }),
      HttpClientModule
    )
  ]
};
