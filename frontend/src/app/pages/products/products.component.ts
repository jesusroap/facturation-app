import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { confirm } from 'devextreme/ui/dialog'
import DataSource from 'devextreme/data/data_source';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';
import { DetailService } from 'src/app/services/detail.service';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ds!: DataSource;

  constructor(
    private service: DataService,
    private detailService: DetailService,
    private router: Router,
    private _location: Location,
  ) {
    this.service.getAllProducts().subscribe((data: Product[]) => {
      this.ds = new DataSource({
        store: data
      });
    })
  }

  ngOnInit(): void {
  }

  editProduct = (e:any) => {
    this.router.navigate([`/pages/add-product/${e.row.data.productId}`])
  }

  deleteProduct = (e:any) => {
    const isCanceled = new Promise((resolve, reject) => {
      const promptPromise = confirm("¿Realmente quiere eliminar el producto?", "Confirmación");
      promptPromise.then((dialogResult:any) => {
        if (dialogResult) {
          this.service.deleteProduct(e.row.data.productId).subscribe(() => {
            console.log("Eliminado")
            const message = `El producto se ha eliminado.`;
            notify({
              message,
              width: 450,
            }, 'success', 3000);
            this.router.navigateByUrl("/pages/add-product", { skipLocationChange: true }).then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
          })
        } else {
          return resolve(true)
        }
      })
    });
    e.cancel = isCanceled;
  }

}
