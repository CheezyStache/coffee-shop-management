import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from '../../catalog/catalog.service';
import { Addon } from '../../models/addon.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-addons-list',
  templateUrl: './addons-list.component.html',
  styleUrls: ['./addons-list.component.css'],
})
export class AddonsListComponent implements OnInit {
  addons: Observable<Addon[]> = new Observable();
  product: Product;
  pickedAddonsIds: string[] = [];

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    this.product = new Product('id', 'Product', 0, [], []);
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;

    this.addons = this.catalogService.getAddons(params['productId']);

    this.catalogService
      .getProductById(params['productId'])
      .subscribe((p) => (this.product = p));
  }

  pickAddon(addonId: string): void {
    if (this.pickedAddonsIds.findIndex((a) => a === addonId) !== -1) {
      this.pickedAddonsIds = this.pickedAddonsIds.filter((a) => a !== addonId);
      return;
    }

    this.pickedAddonsIds.push(addonId);
  }

  onFinish(): void {
    this.router.navigate(['../../'], {
      relativeTo: this.route,
    });
  }
}
