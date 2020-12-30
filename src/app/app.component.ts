import { Component ,TemplateRef,} from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LucidChartViewerComponent } from './PopUps/lucid-chart-viewer/lucid-chart-viewer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucidcart';
  constructor(private modalService: BsModalService){}
}
