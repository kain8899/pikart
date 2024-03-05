import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isMenuCollapsed = true;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
