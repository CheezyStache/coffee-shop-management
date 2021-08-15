import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddonItem } from '../addon-item/addon-item.model';
import { CatalogService } from '../catalog.service';
import { ProductItem } from '../products/product-item/product-item.model';
import { UrlGeneratorService } from '../url-generator.service';

@Component({
  selector: 'app-addons-list',
  templateUrl: './addons-list.component.html',
  styleUrls: ['./addons-list.component.css'],
  providers: [UrlGeneratorService],
})
export class AddonsListComponent implements OnInit {
  product: ProductItem;
  addons: AddonItem[];
  pickedAddons: AddonItem[];

  constructor(
    private urlGenerator: UrlGeneratorService,
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {
    this.product = new ProductItem('Product', 0, 'Category');
    this.addons = [];
    this.pickedAddons = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catalogService
        .getAddons(params['productName'])
        .subscribe((addons) => (this.addons = addons));

      this.catalogService
        .getProduct(params['productName'])
        .subscribe((product) => (this.product = product));
    });
  }

  pickAddon(addon: string): void {
    const newAddon = this.addons.find((a) => a.name === addon);
    if (newAddon == undefined) throw `No Addon with name '${addon}' is in list`;

    if (this.pickedAddons.includes(newAddon))
      this.pickedAddons = this.pickedAddons.filter((a) => a !== newAddon);
    else this.pickedAddons.push(newAddon);
  }

  onFinish(): void {
    this.urlGenerator.navigateToCatalogUrl('./');
  }
}
