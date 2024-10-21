import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'; // Import HelloComponent

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, // Declare HelloComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for ngModel in forms
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
