import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import { CatalogService } from '../../catalog/catalog.service';
import { Parameter } from '../../models/parameter.model';
import { Product } from '../../models/product.model';
import {
  ParameterItem,
  ParametersSection,
} from '../parameters-item/parameters-item.model';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css'],
})
export class ParametersListComponent implements OnInit {
  parameters: ParametersSection[] = [];
  product: Product;

  constructor(
    private router: Router,
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    this.product = new Product('id', 'Product', 0, [], []);
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;

    this.catalogService
      .getParameters(params['productId'])
      .pipe(map(initChosenItems))
      .subscribe((p) => (this.parameters = p));

    this.catalogService
      .getProductById(params['productId'])
      .subscribe((p) => (this.product = p));
  }

  pickParameterItem(sectionId: string, itemId: string): void {
    const section = this.parameters.find((p) => p.id === sectionId);
    if (section == undefined) throw new Error('Parameter section is unknown');

    section.items.forEach((i) => (i.isChosen = false));
    const item = section.items.find((i) => i.id === itemId);
    if (item == undefined) throw new Error('Parameter item is unknown');

    item.isChosen = true;
  }

  onContinue(): void {
    this.router.navigate(['../../', 'addons', this.product.id], {
      relativeTo: this.route,
    });
  }
}

function initChosenItems(parameters: Parameter[]): ParametersSection[] {
  return parameters.map((parameter) => ({
    ...parameter,
    items: parameter.items.map(
      (i) => ({ ...i, isChosen: i.isDefault } as ParameterItem)
    ),
  }));
}
