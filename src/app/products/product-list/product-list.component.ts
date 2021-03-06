import { Component, OnInit } from "@angular/core";
import { IProduct } from "../interfaces/product";
import { ProductDataService } from "../services/product-data.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  _filterString: string = "";

  constructor(private productDataService: ProductDataService) {
    this._filterString = "";    
    this.productDataService.productList.subscribe(item => this.filteredProducts = this.masterProductList = item);
  }

  filterProductList(): IProduct[] {
    var filterBy = this._filterString.toLocaleLowerCase();
    return this.masterProductList.filter(
      (item: IProduct) =>
        item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  filterText: string = "Filter";

  get filterString(): string {
    return this._filterString;
  }

  ngOnInit() {
  }

  onRatingClicked(eventArg: number): void {
    console.log(`Rating click recieved with ${eventArg}`);
  }

  private masterProductList: IProduct[];

  set filterString(v: string) {
    this._filterString = v;

    if (this._filterString)
      this.filteredProducts = this.filterProductList();
      else this.filteredProducts = this.masterProductList;
  }

  toggleProductImage(): void {
    this.isProductImageShown = !this.isProductImageShown;
  }
  filteredByText: string = "Filter by";
  filteredProducts: IProduct[];
  hideImageBtnText: string = "Hide image";
  isProductImageShown: boolean = false;
  productAvailableTableHeaderText = "Availability";
  productCodeTableHeaderText = "ID";
  productListText: string = "Available Product List";
  productNameTableHeaderText = "Name";
  productPriceTableHeaderText = "Price";
  productRatingsTableHeaderText = "Ratings";
  showImageBtnText: string = "Show image";
}
