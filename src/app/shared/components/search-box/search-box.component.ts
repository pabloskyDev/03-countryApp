import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'country-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Output() onValue: EventEmitter<any> = new EventEmitter();
  @Output() onDebounce: EventEmitter<any> = new EventEmitter();

  private deBouncer: Subject<string> = new Subject<string>();
  private deBouncerSubscription!: Subscription;

  ngOnInit(): void {
    this.deBouncerSubscription = this.deBouncer
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

  ngOnDestroy(): void {
    this.deBouncerSubscription.unsubscribe();
  }
}
