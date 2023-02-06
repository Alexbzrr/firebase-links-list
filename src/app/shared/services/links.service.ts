import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ILinks } from "../data/links";
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
} from "@firebase/firestore";
import { collectionData, docData, Firestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LinksService {
  private links: CollectionReference<DocumentData>;

  constructor(
    private linkUteis: Firestore,
    private firestore: AngularFirestore
  ) {
    this.links = collection(this.linkUteis, "links");
  }

  addNewLink(newLink: ILinks) {
    return this.firestore.collection("links").add(newLink);
  }

  getLink(id: string) {
    const linkDocumentReference = doc(this.linkUteis, `links/${id}`);
    return docData(linkDocumentReference, { idField: "id" });
  }

  getAllLink() {
    return collectionData(this.links, {
      idField: "id",
    }) as Observable<ILinks[]>;
  }

  updateLink(link: ILinks) {
    this.firestore
      .doc(`links/${link.id}`)
      .update({ nome: link.nome, url: link.url, pagina: link.pagina });
  }

  deleteLink(id: string) {
    this.firestore.doc(`links/${id}`).delete();
  }
}
