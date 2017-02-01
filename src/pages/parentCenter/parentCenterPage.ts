import { Component } from '@angular/core';

@Component({
  selector: 'parent-center',
  templateUrl: 'parentCenter.tpl.html'
})
export class ParentCenterPage{
    public name:string;
    public age:number;
    public gender:string;
    
    
    constructor() {
        this.name = "Suhail Ahmad";
        this.age = 29;
        this.gender = "boy";        
    }
}