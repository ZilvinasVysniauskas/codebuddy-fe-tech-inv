import {enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/routes';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { effects, reducers } from './app/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      MonacoEditorModule.forRoot()
    ),
    provideRouter(ROUTES),
    provideStore(reducers),
    provideEffects(effects),
    importProvidersFrom(
      !environment.production ? StoreDevtoolsModule.instrument() : [],
    )
  ]
});