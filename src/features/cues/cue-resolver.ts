import { ResolveFn, Router } from '@angular/router';
import { CueService } from '../../core/services/cue-service';
import { inject } from '@angular/core';
import { Cue } from '../../types/cue';
import { EMPTY } from 'rxjs';

export const cueResolver: ResolveFn<Cue> = (route, state) => {
  const cueService = inject(CueService);
  const router = inject(Router);
  const cueId = route.paramMap.get('id');

  if (!cueId) {
    router.navigateByUrl('/not-found');
    return EMPTY;
  }

  return cueService.getCue(cueId);
};
