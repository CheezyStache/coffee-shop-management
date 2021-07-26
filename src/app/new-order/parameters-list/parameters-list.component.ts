import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { ParametersSection } from '../parameters-item/parameters-item.model';
import { ProductItem } from '../product-item/product-item.model';
import { UrlGeneratorService } from '../url-generator.service';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css'],
  providers: [UrlGeneratorService],
})
export class ParametersListComponent implements OnInit {
  parameters: ParametersSection[] = [];
  product: ProductItem;
  chosenItems: { [id: string]: string };

  constructor(
    private urlGenerator: UrlGeneratorService,
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    this.product = new ProductItem('Product', 0, 'Category');
    this.chosenItems = {};
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catalogService
        .getParameters(params['productName'])
        .subscribe((sections) => {
          this.parameters = sections;
          this.chosenItems = sections.reduce(
            (obj, s) => ({ ...obj, [s.name]: s.parameters[0].name }),
            {}
          );
        });

      this.catalogService
        .getProduct(params['productName'])
        .subscribe((product) => (this.product = product));
    });
  }

  pickParameterItem(section: string, item: string): void {
    this.chosenItems[section] = item;
  }

  onContinue(): void {
    this.urlGenerator.navigateToCatalogUrl('addons', this.product.name);
  }
}
