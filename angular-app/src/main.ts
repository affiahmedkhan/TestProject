import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the path as necessary to point to your AppModule

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
