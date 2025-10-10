import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';
import { CueList } from '../features/cues/cue-list/cue-list';
import { CueDetailed } from '../features/cues/cue-detailed/cue-detailed';
import { AboutUs } from '../features/about-us/about-us';
import { Contact } from '../features/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'cues', component: CueList },
            { path: 'cues/:id', component: CueDetailed },
            // { path: 'build', component: Build },
            { path: 'about-us', component: AboutUs },
            { path: 'contact', component: Contact },
            { path: 'messages', component: Messages }
        ]
    },
    { path: 'errors', component: TestErrors },
    { path: 'server-error', component: ServerError },
    { path: '**', component: NotFound }
];
