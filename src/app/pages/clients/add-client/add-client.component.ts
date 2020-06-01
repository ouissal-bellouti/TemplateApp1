import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/service/clients.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clients } from 'src/app/model/clients';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public crudApi: ClientsService ,public fb: FormBuilder,public toastr: ToastrService,
    private router : Router) { }

    ngOnInit() {

      if (this.crudApi.choixmenu == "A")
      {this.infoForm()};
     }
    infoForm() {
      this.crudApi.dataForm = this.fb.group({
          Id: null,
          Nom: ['', [Validators.required]],
          Prenom: ['', [Validators.required]],
          Email: ['', [Validators.required, Validators.minLength(5)]],
          Telephone: ['', [Validators.required, Validators.minLength(8)]],
          Adresse: ['', [Validators.required, Validators.minLength(10)]],
          Ville: ['', [Validators.required, Validators.minLength(8)]],
          CodePosTelephonetal: ['', [Validators.required, Validators.minLength(8)]],

          });
      }



    ResetForm() {
        this.crudApi.dataForm.reset();
    }
    onSubmit() {
      if (this.crudApi.choixmenu == "A")
      {
        this.addData();
      }
      else
      {

       this.updateData()
      }

  }



  addData() {
    this.crudApi.createData(this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/clients']);
    });
  }
    updateData()
    {

      this.crudApi.updateData(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
      subscribe( data => {
        this.toastr.success( 'Modification Faite avec Success');

        this.router.navigate(['/clients']);
      });
    }



}
