import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cue, EditableCue } from '../../../types/cue';
import { CueService } from '../../../core/services/cue-service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../../core/services/toast-service';

@Component({
  selector: 'app-cue-overview',
  imports: [FormsModule],
  templateUrl: './cue-overview.html',
  styleUrl: './cue-overview.css'
})
export class CueOverview implements OnInit {
  @ViewChild('editForm') editForm?: NgForm;
  protected cueService = inject(CueService);
  private toast = inject(ToastService);
  private route = inject(ActivatedRoute);
  protected cue = signal<Cue | undefined>(undefined);
  protected editableCue: EditableCue = {
    type: '',
    maker: '',
    model: '',
    year: '',
    jointType: '',
    imperfections: '',
    weight: '',
    length: '',
    price: 0,
    isVerified: false,
    description: ''
  };

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data =>{
      this.cue.set(data['cue']);
    });
    this.editableCue = {
      type: this.cue()?.type || '',
      maker: this.cue()?.maker || '',
      model: this.cue()?.model || '',
      year: this.cue()?.year || '',
      jointType: this.cue()?.jointType || '',
      imperfections: this.cue()?.imperfections || '',
      weight: this.cue()?.weight || '',
      length: this.cue()?.length || '',
      price: this.cue()?.price || 0,
      isVerified: this.cue()?.isVerified || false,
      description: this.cue()?.description || ''
    }
  }

  updateOverview() {
    if (!this.cue()) return;
    const updatedCue = {...this.cue(), ...this.editableCue};
    console.log(updatedCue);
    this.toast.success('Cue overview updated successfully.');
    this.cueService.editMode.set(false);
  }
}
