import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlGeneratorService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToCatalogUrl(rootUrl: string, name?: string): void {
    if (name == undefined) {
      this.router.navigate([rootUrl], {
        relativeTo: this.route.parent,
      });

      return;
    }

    const parameter = name.split(' ').join('-').toLowerCase();

    this.router.navigate([rootUrl, parameter], {
      relativeTo: this.route.parent,
    });
  }
}
