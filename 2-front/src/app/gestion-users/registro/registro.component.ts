  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
  })
  export class RegistroComponent implements OnInit {

    constructor(private formBuilder: FormBuilder) { }

    registroForm = this.formBuilder.group(
      {
        nombre: ["", Validators.required],
        apellido: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        clave: ["", [Validators.required, Validators.minLength(8)]],
        rptClave: ["", Validators.required]
      },
      {
        validator: this.validarClaves("clave", "rptClave")
      }
    );

    ngOnInit(): void {
    }
  
    get form() {
      return this.registroForm.controls;
    }

    onReset() {
      this.registroForm.reset();
    }

    onSubmit() {
      if (this.registroForm.invalid) {
        return;
      }
  
      alert(
        "SUCCESS!! :-)\n\n" + JSON.stringify(this.registroForm.value, null, 4)
      );
    }

    validarClaves(ctrlClave: string, ctrlRptClave: string) {
      return (formGroup: FormGroup) => {
        const clave = formGroup.controls[ctrlClave];
        const claveControl = formGroup.controls[ctrlRptClave];
  
        if (claveControl.errors && !claveControl.errors['validarClaves']) {
          return;
        }
  
        if (clave.value !== claveControl.value) {
          claveControl.setErrors({ validarClaves: true });
        } else {
          claveControl.setErrors(null);
        }
      };
    }

  }