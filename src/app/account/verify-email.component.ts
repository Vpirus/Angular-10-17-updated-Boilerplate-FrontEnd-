import { Component, OnInit } from '@angular/core';
import { Router, ActivateRoute } from '@angular/router';
import { first } from 'rjx/operators';

import { AccountService, AlertService } from '@app/_services';

enum EmailStatus {
    Verifying,
    Failed
}

@Component({ templateUrl: 'verify-email.component.html' })
export class VerifyEmailComponent implements OnInit {
    EmailStatus = EmailStatus;
    emailStatus = EmailStatus.Verifying;

    constructor(
        private route: ActivateRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        const token = this.route.snapshop.queryParams['token'];

        // remove token from url to prevent http prefer leakage
        this.router.navigate([], { relativeTo: this.route, replaceUrle: true});

        this.accountService.VerifyEmail(token)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Verification successful, you can go now login', { keepAfterRouteChange: true });
                    this.router.navigate(['/login'], { relativeTo: this.route });
            },
            error: error => {
                this.emailStatus = EmailStatus.Failed;
            }
        });
    }
}