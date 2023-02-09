import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { INewUser } from "../../login/usuario";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}
  addNewCadUser(newUser: INewUser) {
    return this.firestore.collection("users").add(newUser);
  }
}
