import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= 'Moksh Sharma';
  show:boolean=true;
  techStack:string[]=["C++","Java","SpringBoot","Spring Microservices"];
  value = 0;
  imageUrl:string="assets/image1.jpeg";
  product: Object = {
    'productCode': 'PROD_P001', 'productName': 'Laptop', 'productPrice': 25000,
    'purchaseDate': '5/12/2017', 'productTax': '0.1', 'productRating': 4.53
  };
  numberList: number[] = [
    3333,123,4,98657,123,4,111
  ];
  constructor() {
  }
  public changeName():void{
    if(this.name==='Moksh Sharma'){
      this.name='Robert Downey Jr';
      this.show=false;
    }
    
    else if(this.name==='Robert Downey Jr'){
      this.name='Moksh Sharma';
      this.show=true;
    }
  }
  public nextChoice() :void{
    this.value++;
  }
  public getUrl():string{
    return this.imageUrl;
  }
}

