import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { AuthGuard } from './app/_services/auth-guard.guard';
import { AuthenticateComponent } from './app/_components/authenticate/authenticate.component';

import {appRoutes} from "./app/app.routes";
import {authInterceptor} from "./app/_services/auth.interceptor";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes), provideAnimationsAsync(),
  ],
}).catch(err => console.error(err));
