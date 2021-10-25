import { InstantiateExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fossil } from 'src/app/models/fossil';
import { FossilService } from 'src/app/services/fossil.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fossil-list',
  templateUrl: './fossil-list.component.html',
  styleUrls: ['./fossil-list.component.css']
})
export class FossilListComponent implements OnInit {

  fossils: Fossil[] = [];
  selected: Fossil | null = null;
  title = 'Fossils';
  newFossil: Fossil = new Fossil(0," "," "," ",0," "," "," "," ");
  showComplete = false;
  editFossil: Fossil |null=null;
  newForm=false;
  editMode=false;
    constructor(
      private fossilServ: FossilService,
      private route: ActivatedRoute,
      private router: Router
    ) {}


  ngOnInit(): void {
    this.loadFossils();
  }
  loadFossils(){
    this.fossilServ.index().subscribe(
      fossils => {
        this.fossils=fossils;
      },
      fail=>{
        console.error('PetListcomponent.index() : Error');
        console.error(fail);
      }
    );
  }
  setEditFossil(fossil: Fossil){
    this.editFossil=Object.assign({},this.selected);
    this.updateFossil(this.editFossil);
    this.selected = null;
  }
  displayFossil(fossil:Fossil){
    this.selected= fossil;
  }
  updateFossil(fossil: Fossil, showFossil=true){
    this.fossilServ.update(fossil).subscribe(
      updated => {
        this.loadFossils();
        this.editFossil = null;
      },
      fail =>{
        console.error("Update Fossil Error");
        console.log(fail);
      }
    );
  }
  deleteFossil(id:number):void{
    this.fossilServ.destroy(id).subscribe(
    (success) => {
      this.loadFossils();

    },
    fail => {
      console.error("Error on Delete before service");
      console.log(fail);
    }
    ) ;

}





}
