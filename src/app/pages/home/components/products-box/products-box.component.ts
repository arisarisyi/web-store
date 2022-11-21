import { Component, Output, OnInit, Input, EventEmitter } from "@angular/core"
import { Product } from "src/app/models/product.model"

@Component({
  selector: "app-products-box",
  templateUrl: "./products-box.component.html",
  styles: [],
})
export class ProductsBoxComponent implements OnInit {
  @Input() fullWidthMode: boolean = false
  @Input() product: Product | undefined
  @Output() addToCart = new EventEmitter()
  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
