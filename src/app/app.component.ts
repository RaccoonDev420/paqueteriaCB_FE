import { Component, OnInit } from '@angular/core';
import { Configuration, MailPackageAPIService } from './shared/openapi';
import { JwtService } from './shared/service/JwtService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'paqueteriaCB_FE';

  constructor(
    private config: Configuration, private jwtService: JwtService, private mailPackageService: MailPackageAPIService
  ){

  }

  ngOnInit(): void {
    //this.jwtService.setToken("Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6W10sImV4cCI6MTcyMDMwMzIyNywiaWF0IjoxNzIwMjE2ODI3LCJqdGkiOiIyIn0.mccwaMf2ATFO2py0IiWNM7zbsRKD-ELqVO1EaCHThpU" )
    this.config.credentials.JWT = this.jwtService.getToken();

    this.mailPackageService.findAll().subscribe(result =>{
      console.log(result['datos'])
    })
  }
}
