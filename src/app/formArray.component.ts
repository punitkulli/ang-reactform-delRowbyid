import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: 'formArray.component.html',
  styleUrls: ['formArray.component.css']
})
export class FormArrayComponent implements OnInit {

  states: Array<string> = ['KA', 'MH', 'KL', 'AP'];
  rto: Array<string> = ['KA-01', 'MH-49', 'KL-25', 'AP-28'];

  employeeForm: FormGroup;


  constructor(private fb: FormBuilder){ }

  ngOnInit(){

    this.employeeForm = this.fb.group({
      firstName: [],
      lastName: [],
      employeeDetails: this.fb.array([this.addemployeeAddressGroup()])
    });

  }

  addemployeeAddressGroup(){
    return this.fb.group({
      isPrimaryFlg:[],
      company: [],
      streetAddress: [],
      phoneNumber: [],
      state: [],
      city:[],
      zipCode: []
    });
  }

get employeeAddresArray(){
  return <FormArray>this.employeeForm.get('employeeDetails');
}

addAddres(){
  this.employeeAddresArray.push(this.addemployeeAddressGroup())
}


deleteAddress(i){
  (<FormArray>this.employeeForm.controls.employeeDetails).removeAt(i);
}

}
