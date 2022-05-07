import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";


@Injectable({providedIn:"root"})
export class ProductService{

  constructor(private http:HttpClient) {
  }
  getAllProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/produits");

  }
  getSelectedProduct():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/produits?selected=true");
  }
  getAvailableProduct():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+"/produits?available=true");
  }
  deleteProduit(produitId:number):Observable<number>{
    let host = environment.host;
    let httpheaders=new HttpHeaders()
      .set('Content-type','application/Json');
  
    return this.http.delete<number>(host+"/produits/"+produitId);
  }
  updateProduit(produit:Product):Observable<Product>{
    let host = environment.host;
    return this.http.patch<Product>(`${host}/${produit.id}`,produit);

  }


}
