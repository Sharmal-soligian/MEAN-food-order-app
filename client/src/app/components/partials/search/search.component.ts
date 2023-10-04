import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      if (param['searchTerm']) this.searchTerm = param['searchTerm']
    })
  }

  ngOnInit(): void {

  }

  search(term: string) {
    if (term) {
      this.router.navigate(['/search/' + term])
    }
  }

}
