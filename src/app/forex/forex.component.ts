import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';


declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;
  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebarr-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
      "columnDefs" : 
      [
        {
          "targets" : 2,
          "className" : "text-right"
        }
      ]
    }
    );

    this.getData();
  }
  ngOnInit(): void {}

  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : "+ sgd2);
      row = [2, "SGD", sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : "+ bnd2);
      row = [3, "BND", bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : "+ hkd2);
      row = [4, "HKD", hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      row = [5, "BTC", btc2];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, 'en-US', '', 'AUD');
      console.log('AUD : ', aud2);
      row = [6, 'AUD', aud2];
      this._table1.row.add(row);

      var afn = rates.IDR / rates.AFN;
      var afn2 = formatCurrency(afn, 'en-US', '', 'AFN');
      console.log('AFN : ', afn2);
      row = [7, 'AFN', afn2];
      this._table1.row.add(row);

      var amd = rates.IDR / rates.AMD;
      var amd2 = formatCurrency(amd, 'en-US', '', 'AMD');
      console.log('AMD : ', amd2);
      row = [8, 'AMD', amd2];
      this._table1.row.add(row);

      var bob = rates.IDR / rates.BOB;
      var bob2 = formatCurrency(bob, 'en-US', '', 'BOB');
      console.log('BOB : ', bob2);
      row = [9, 'BOB', bob2];
      this._table1.row.add(row);

      var cad = rates.IDR / rates.CAD;
      var cad2 = formatCurrency(cad, 'en-US', '', 'CAD');
      console.log('CAD : ', cad2);
      row = [10, 'CAD', cad2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
