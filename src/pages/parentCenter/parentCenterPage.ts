import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular'

@Component({
  selector: 'parent-center',
  templateUrl: 'parentCenter.tpl.html'
})
export class ParentCenterPage{
    public name:string;
    public dob:Date;
    public gender:string;
    

    constructor(private storage: Storage, private loadingController:LoadingController) {
        this.fetchDetails();            
    }

    public onSaveClicked(){
        const loader = this.createLoader("Saving Details");
        loader.present();
        this.storage.set("babyDetails", {name:this.name, dob:this.dob, gender:this.gender}).then(()=>{
            loader.dismiss();
        });;
    }  

    private fetchDetails(){
        const loader = this.createLoader("Fetching Details");
        loader.present();
        this.storage.get("babyDetails").then((details)=>{
            loader.dismiss();
            if(!details)
                return;
            this.name = details.name;
            this.dob = details.dob;
            this.gender = details.gender;  
            //loader.dismiss();
        }, (err)=> {
            console.log(err);
            loader.dismiss();
        });
    }  

    private createLoader(content:string):Loading{
        return this.loadingController.create({content:content});
    }
}
