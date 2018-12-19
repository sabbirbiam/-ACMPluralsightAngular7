import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List!';
  imageWidth = 50;
  imageMargin = 20;
  showImage = false;
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {

  }

  toggleImage(): void {
    // console.log(this.showImage);
    this.showImage = !this.showImage;
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      products => {
         this.products = products;
         this.filteredProducts = this.products;
        },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRattingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }

}
