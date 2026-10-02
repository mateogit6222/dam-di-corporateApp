import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORTANTE para usar *ngFor
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular'; // IMPORTANTE para usar las etiquetas de Ionic
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCol] // AÑADE ESTO
})
export class ProductosPage implements OnInit {
  products: any = [];

  constructor(
    private productService: ProductsService
  ){}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    console.log('Productos cargados:', this.products);
  }
}