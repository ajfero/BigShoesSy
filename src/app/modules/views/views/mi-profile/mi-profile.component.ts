//Angular tools
import { Component } from '@angular/core';
// Model and Services
import { InformationUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-mi-profile',
  templateUrl: './mi-profile.component.html',
  styleUrls: ['./mi-profile.component.scss']
})
export class MiProfileComponent {

  // Data User
  user: InformationUser | null = null;

  constructor(private authService: AuthService, private userService: UserService) { }
  //   ngOnInit(): void {
  //     this.userService.getProfile()
  //     .subscribe(data => {
  //       this.user = data;
  //     })
  //   }
  // }
  // Get user profile (id)
}
