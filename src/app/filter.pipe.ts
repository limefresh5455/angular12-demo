import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item:any) => {
    	console.log(item);
      return item.toLowerCase().includes(searchText);
    });
  }

}