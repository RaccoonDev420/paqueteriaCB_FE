import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailPackageAPIService, MailPackageDto } from 'src/app/shared/openapi';

@Component({
    selector: 'package-aomponent',
    templateUrl: 'package.component.html', 
    styleUrls: ["package.component.scss"],
    providers: [MessageService]
})

export class PackageComponent implements OnInit {

    package: MailPackageDto;
    searchPackageForm: FormGroup;
    showResult: boolean = false;
    loading: boolean = false;

    constructor(
        private packageService: MailPackageAPIService,
        private fb: FormBuilder, private messageService: MessageService
    ) { }

    ngOnInit() { 
        this.searchPackageForm = this.fb.group({
            id: ['', Validators.required]
        })
    }

    onSubmit(){
        if(this.searchPackageForm.valid){
            this.loading = true;
            this.packageService.findById(this.searchPackageForm.controls['id'].value).subscribe((response) =>{
                if(response.success){
                    this.package = response.data;
                    this.showResult = true;
                }else{
                    this.showResult = false;
                    this.package = null;
                    this.messageService.add({ 
                        severity: 'error',
                        summary: "No se encontraron Resultados", 
                        detail: "Al parecer el numero de folio no existe, por favor verifique que el numero sea correcto."
                    });
                }
                this.loading = false;
            })
        }else{
            this.messageService.add({ 
                severity: 'error',
                summary: "Formulario Invalido", 
                detail: "Por favor ingrese su numero de folio"
            });
        }
    }
}