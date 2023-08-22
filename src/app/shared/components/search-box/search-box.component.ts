import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onValue: EventEmitter<any> = new EventEmitter();
  @Output() onDebounce: EventEmitter<any> = new EventEmitter();

  private deBouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.deBouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      console.log('This value deBouncer is: ', value);
      this.search(value);
    })
  }

  search(value: string): void {
    this.onDebounce.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.deBouncer.next( searchTerm );
  }
}
