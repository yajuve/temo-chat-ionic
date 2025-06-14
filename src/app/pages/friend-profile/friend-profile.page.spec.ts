import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendProfilePage } from './friend-profile.page';

describe('FriendProfilePage', () => {
  let component: FriendProfilePage;
  let fixture: ComponentFixture<FriendProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
