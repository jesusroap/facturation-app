import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  idProduct: any = this.route.snapshot.paramMap.get("id");
  product: Product;
  colCountByScreen: object;
  colCountByScreenTwo: object;
  Picture = 'https://cdn-icons-png.flaticon.com/512/69/69943.png';
  title: string;
  productName!: string;
  stock!: string;
  buttonOptions = {
    text: "Submit",
    type: "success",
    useSubmitBehavior: true,
    stylingMode: "outlined"
  }
  buttonOptionsTwo:any;


  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.buttonOptionsTwo = {
      text: "Return",
      type: "success",
      // useSubmitBehavior: false,
      stylingMode: "outlined",
      onClick: function() {
        router.navigate(['/pages/products'])
      }
    }
    this.product = {
      productId: 0,
      productName: '',
      price: 0,
      stock: '',
      // BirthDate: new Date('1974/11/5'),
      // HireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3
    };
    this.colCountByScreenTwo = {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 2
    };

    if(!this.idProduct) {
      this.title  = "Add Product";
    } else {
      this.title = "Edit Product";
      this.service.getProduct(this.idProduct).subscribe(data => {
        if(this.idProduct) {
          this.product = data
          this.productName = data.productName;
          this.stock = data.stock;
        } else {
          this.productName = "";
          this.stock = ""
        }
      })
    }
  }

  ngOnInit(): void {
  }

  onFormSubmit = (e: any) => {
    if(!this.idProduct) {
      this.service.addProduct(e).subscribe(data => {
        notify({
          message: 'Producto agregado satisfactoriamente.',
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
        this.router.navigate(['/pages/products'])
      })
    } else {
      this.service.updateProduct(e).subscribe(data => {
        notify({
          message: 'Producto actualizado satisfactoriamente.',
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
      })
      this.router.navigate(['/pages/products'])
    }
    e.preventDefault();
  };

}
