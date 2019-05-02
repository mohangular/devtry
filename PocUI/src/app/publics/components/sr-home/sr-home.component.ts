import {Component, OnInit} from './node_modules/@angular/core';
import {FormControl} from './node_modules/@angular/forms';
import {Observable} from './node_modules/rxjs';
import {map, startWith} from './node_modules/rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-sr-home',
  templateUrl: './sr-home.component.html',
  styleUrls: ['./sr-home.component.css']
})
export class SrHomeComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['USA', 'India', 'Australia','England'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}