  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';

  @Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
  })
  export class RegistroComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private regitroSrv: RegistroUsuarioService) { }

    registroForm = this.formBuilder.group(
      {
        nombreUser: ["", Validators.required],
        mail: ["", [Validators.required, Validators.email]],
        contrasenia: ["", [Validators.required, Validators.minLength(8)]],
        rptContrasenia: ["", Validators.required]
      },
      {
        validator: this.validarClaves("contrasenia", "rptContrasenia")
      }
    );

    ngOnInit(): void {
    }
  
    get form() {
      return this.registroForm.controls;
    }

    get nombreUser() {
      return this.registroForm.get("nombreUser");
    }

    get contrasenia() {
      return this.registroForm.get("contrasenia");
    }

    get mail() {
      return this.registroForm.get("email");
    }

    onReset() {
      this.registroForm.reset();
    }

    onSubmit() {
      if (this.registroForm.invalid) {
        return;
      }

      this.regitroSrv.registroUsuario(this.registroForm.value).subscribe(
        data => {
          console.log(data);
        }
      );
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