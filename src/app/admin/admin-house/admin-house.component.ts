import { MatTableDataSource } from '@angular/material/table';
import {Component, AfterViewInit, ViewChild, } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModifyHouseComponent } from '../../template/modify-house/modify-house.component';

/**
* @title Table with expandable rows
*/
@Component({
  selector: 'app-admin-house',
  styleUrls: ['admin-house.component.css'],
  templateUrl: 'admin-house.component.html',
})
export class AdminHouseComponent {
  filterValues = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'Author', 'Author_id', 'Nom', 'House_id', 'Statut', 'Action' ];

  filterSelectObj = [];
  filterInputObj = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private dialog: MatDialog){

    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'Statut',
        columnProp: 'Statut',
        options: []
      },
    ];
    this.filterInputObj = [
      {
        name: 'Nom',
        columnProp: 'Nom',
        options: []
      },
    ];
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = "";
    })
    this.filterInputObj.forEach((value, key) => {
      value.modelValue = "";
    })
  }

  ngOnInit() {
    this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }


  openDialog(element : any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ModifyHouseComponent, {
      width: '90vw',
      height: '90vh',
      data: {
        dataKey: element
      }
    });
  }

  // Get Unique values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Get remote serve data using HTTP call
  getRemoteData() {

    const remoteDummyData = [
      {
        "id": 1,
        "Author": "Leanne Graham",
        "Author_id": 23,
        "Nom" : "Cabane du bois",
        "House_id" : 12,
        "Statut": "Pending",
      },
      {
        "id": 1,
        "Author": "Leanne Graham",
        "Author_id": 23,
        "Nom" : "Cabane du bois",
        "House_id" : 12,
        "Statut": "Published",
      },
      {
        "id": 1,
        "Author": "Leanne Graham",
        "Author_id": 23,
        "Nom" : "Cabane du bois",
        "House_id" : 12,
        "Statut": "Published",
      },
      {
        "id": 1,
        "Author": "Leanne Graham",
        "Author_id": 23,
        "Nom" : "Cabane du bois",
        "House_id" : 12,
        "Statut": "Pending",
      },

    ];
    this.dataSource.data = remoteDummyData;

    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(remoteDummyData, o.columnProp);
    });
  }

  // Called on Filter change
  filterChange(filter, event) {
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }
      let nameSearch = () => {
        let found = true;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (!(data[col].toString().toLowerCase().indexOf(word) != -1) && isFilterSet) {
                found = false
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = "";
    })
    this.filterInputObj.forEach((value, key) => {
      value.modelValue = "";
    })
    this.dataSource.filter = "";
    console.log(this.filterSelectObj);
    console.log(this.filterInputObj);
  }

}
