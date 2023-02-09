import { MatDialogRef } from "@angular/material/dialog";
import { environment } from "./../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAuthGuardModule } from "@angular/fire/compat/auth-guard";
import { FirestoreModule } from "@angular/fire/firestore";
import { AuthenticationService } from "./shared/services/authentication.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
    AngularFireAuthModule,
    AuthenticationService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
