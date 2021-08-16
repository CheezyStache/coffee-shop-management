import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from '../../catalog/catalog.service';
import { Parameter } from '../../models/parameter.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css'],
})
export class ParametersListComponent implements OnInit {
  parameters: Observable<Parameter[]> = new Observable();
  product: Product;
  chosenItemsIds: { [key: string]: string } = {};

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    this.product = new Product('id', 'Product', 0, [], []);
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;

    this.parameters = this.catalogService.getParameters(params['productId']);
    this.parameters.subscribe(this.initChosenItems);

    this.catalogService
      .getProductById(params['productId'])
      .subscribe((p) => (this.product = p));
  }

  pickParameterItem(sectionId: string, itemId: string): void {
    this.chosenItemsIds[sectionId] = itemId;
  }

  onContinue(): void {
    this.router.navigate(['../../', 'addons', this.product.id], {
      relativeTo: this.route,
    });
  }

  private initChosenItems(parameters: Parameter[]): void {
    this.chosenItemsIds = {};

    for (const p of parameters) {
      this.chosenItemsIds[p.id] = p.items.find((i) => i.isDefault)?.id ?? '';
    }
  }
}
