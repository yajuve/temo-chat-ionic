import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'list-friends',
    loadComponent: () => import('./pages/chat-room/list-friends/list-friends.page').then(m => m.ListFriendsPage)
  },
  {
    path: 'chat-room',
    loadComponent: () => import('./pages/chat-room/chat-room.page').then(m => m.ChatRoomPage)
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/my-profile/my-profile.page').then(m => m.MyProfilePage)
  },
  {
    path: 'friend-profile',
    loadComponent: () => import('./pages/friend-profile/friend-profile.page').then(m => m.FriendProfilePage)
  },
];
