import { AdminService } from './../../services/admin.service';
import { Customer } from './../../models/customer';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css'],
})
export class CustomersDetailsComponent implements OnInit {
  customers: Customer[];
  searchText: string;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.adminService.getAllCustomers().subscribe(
      (res) => {
        this.customers = res;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  deleteCustomer(id: number) {
    this.adminService.deleteCustomer(id).subscribe(
      (res) => {
        this.customers = this.customers.filter(
          (customer) => customer.id !== id
        );
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
