import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular'; 
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCol] 
})
export class ProductosPage implements OnInit {
  products: any = [];

  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef // 1. Inyectamos el detector de cambios
  ){}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.cdr.detectChanges(); // 2. Obligamos a Angular a repintar la pantalla
  }
}