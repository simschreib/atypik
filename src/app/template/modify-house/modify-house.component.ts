
import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-house',
  templateUrl: './modify-house.component.html',
  styleUrls: ['./modify-house.component.css']
})
export class ModifyHouseComponent implements OnInit {
  infos = [
    'Lemon',
    'Lime',
    'Apple',
  ];
  checked = true
  houseForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    images: new FormControl(''),
    info: new FormControl(''),
    activies: new FormControl(''),
    carac: new FormControl(''),
    location: new FormControl(''),
    statut: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModifyHouseComponent>,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAutocompleteSelected(event){
    console.log(event);
  }
  onLocationSelected(event){
    console.log(event);
  }
  changeInfo(event){
    console.log(event);
  }
  changeActivities(event){
    console.log(event);
  }
  changeCarac(event){
    console.log(event);
  }
  toogle(event){
    console.log(event);
    this.checked = event.checked;
  }


  ngOnInit(): void {
  }

}
