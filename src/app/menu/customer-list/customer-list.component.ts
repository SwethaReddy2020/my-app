import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { CustomerService } from 'src/app/core/services/customer-list.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
   /*  this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    }); */
  }
}
