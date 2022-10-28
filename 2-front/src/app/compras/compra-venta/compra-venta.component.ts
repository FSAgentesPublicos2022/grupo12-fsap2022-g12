import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService} from'src/app/services/comprar.service';


interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}


@Component({
  selector: 'compra-venta',
  templateUrl: './compra-venta.component.html',
  styleUrls: ['./compra-venta.component.css']
})
export class CompraVentaComponent implements OnInit {
  p: number = 1;
  valorCriptoSeleccionada:number=0;
  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
  coins: Coin[] = [];
  titles: string[] = ['Criptomoneda', 'Precio en dólares', 'Precio en pesos', '24H Volumen','Operaciones']; //quite el '#', que no sirve para nada.
  searchText: string = '';
  filteredCoints: Coin[] = [];
  
  constructor(private router: Router,private http: HttpClient, private comprarService: ComprarService) { }

  ngOnInit() {
    this.http.get<Coin[]>(this.api).subscribe(
      (res) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
      (err) => console.error(err)
    );
  }
  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  setValorCripto(valor1:any,enviar:any)
  {
    this.valorCriptoSeleccionada= parseFloat(valor1);
 this.comprarService.valorCripto(this.valorCriptoSeleccionada);
    this.router.navigate(["/comprar",enviar]);
  }

}
