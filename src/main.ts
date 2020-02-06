import '@angular/localize/init';

import { loadTranslations } from '@angular/localize';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslations, ParsedTranslationBundle } from '@locl/core';

import { AppModule } from './app/app.module';

getTranslations('/assets/i18n/fr.json').then(
  (data: ParsedTranslationBundle) => {
    console.warn(data);
    loadTranslations(data as any);
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
);
