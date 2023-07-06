import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  genresId: number[] | null = null;
  theatersId: number[] | null = null;

  filtersChange = new EventEmitter<{genresId: number[] | null, theatersIds: number[] | null}>();
  clearFilters = new EventEmitter();
  
  constructor() {
    this.filtersChange.subscribe(ids=>{
      this.genresId = ids.genresId;
      this.theatersId = ids.theatersIds;
    });
    
    this.clearFilters.subscribe(()=> {
      this.genresId = null;
      this.theatersId = null;
    })
  }

}
