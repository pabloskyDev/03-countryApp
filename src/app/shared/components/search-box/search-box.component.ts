import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Output() onValue: EventEmitter<any> = new EventEmitter();

  search(value: string): void {
    this.onValue.emit(value);
  }
}
