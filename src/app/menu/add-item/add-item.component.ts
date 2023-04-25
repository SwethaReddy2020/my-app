import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
 
  itemForm!: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: string,
  private dialogRef: MatDialogRef<AddItemComponent>) {}
  ngOnInit(): void {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemDescription: ['', Validators.required],
  });
}

doAction(){
  this.dialogRef.close({data:this.itemForm.value});
}
}
