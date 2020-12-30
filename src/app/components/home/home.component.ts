import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";
import { LucidChartViewerComponent } from 'src/app/PopUps/lucid-chart-viewer/lucid-chart-viewer.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'lucidcart';
  embeded:string='<div style= "width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width: 640px" src="https://lucid.app/documents/embeddedchart/da589ae2" id= "_OG1eYoNVRz_"></iframe></div> ';
  bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService){}
  ngOnInit(): void {
  }

  viewChart() {
    const initialState = {
      code: this.embeded,
    };
    const config: ModalOptions = { class: 'modal-sm' };
    this.bsModalRef = this.modalService.show(LucidChartViewerComponent, {
      initialState
    });
    //this.bsModalRef.setClass('modal-sm');
    this.bsModalRef.content.closeBtnName = "Close";
  }
}
