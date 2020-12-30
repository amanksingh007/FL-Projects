import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-lucid-chart-viewer',
  templateUrl: './lucid-chart-viewer.component.html',
  styleUrls: ['./lucid-chart-viewer.component.css']
})
export class LucidChartViewerComponent implements OnInit {
  code:any;
  embedUrl:string="https://lucid.app/documents/embeddedchart/5c9a06a0-cb91-40cf-a20d-f429827de532";
  embedId:string="cyL1gmBwocSu";
  constructor(public bsModalRef: BsModalRef,private router:Router) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.bsModalRef.hide();
    this.router.navigateByUrl("/");
  }
}
