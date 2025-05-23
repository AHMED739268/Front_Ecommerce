import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { authinterceptorInterceptor } from './interceptors/authinterceptor.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
     providers: [provideHttpClient(withInterceptors([authinterceptorInterceptor])),provideZoneChangeDetection({ eventCoalescing: true }),
          provideRouter(routes ,withComponentInputBinding(), withViewTransitions()),
          provideAnimations(),
          provideToastr()
          ]
};