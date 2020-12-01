import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent{

  @Input() label : any;
  @Input() all : any;
  @Input() data : any;
  @Output() valueChange = new EventEmitter
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  dataCtrl = new FormControl();
  filteredElements: Observable<any>;
  allElements;

  @ViewChild('elementInput') elementInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(){
  }
  valueChanged(){
    this.valueChange.emit(this.data);
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    var temp = JSON.parse(JSON.stringify(this.data))
    const lowercased = temp.map(value => value.toLowerCase());
    // Add
    if ((value || '').trim() && lowercased.indexOf(value.toLowerCase()) === -1) {
      this.data.push( value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.allElements = this.getAllElement(this.data, this.all);
    this.getSuggestion();
    this.valueChanged();
    this.dataCtrl.setValue(null);
  }

  remove(element: string): void {
    const index = this.data.indexOf(element);

    if (index >= 0) {
      this.data.splice(index, 1);
    }
    this.allElements = this.getAllElement(this.data, this.all);
    this.getSuggestion();
    this.valueChanged();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if(this.data.indexOf(event.option.viewValue) === -1){
      this.data.push(event.option.viewValue);
      this.elementInput.nativeElement.value = '';
      this.dataCtrl.setValue(null);
    }
    this.allElements = this.getAllElement(this.data, this.all);
    this.getSuggestion();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.allElements = JSON.parse(JSON.stringify(changes.all.currentValue));
    this.data = JSON.parse(JSON.stringify(changes.data.currentValue));
    if(this.data){
      this.allElements = this.getAllElement(this.data, this.all);
      this.getSuggestion();
      this.valueChanged();
    }
  }

  getSuggestion(){
    this.filteredElements = this.dataCtrl.valueChanges.pipe(
      startWith(null),
      map((element: any | null) => (element) ? this._filter(element) : this.allElements.slice())
    );
  }

  getAllElement(data,all){
    var temp = JSON.parse(JSON.stringify(all));
    var elements = new Array();

    temp.forEach( function(value){
      if(data.indexOf(value) === -1){
        elements.push(value)
      }
    });
    console.log(elements);
    return elements;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allElements.filter(element => (element.toLowerCase().indexOf(filterValue) === 0  ) );
  }
}
