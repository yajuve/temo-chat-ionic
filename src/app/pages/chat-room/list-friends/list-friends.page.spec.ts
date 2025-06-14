import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFriendsPage } from './list-friends.page';

describe('ListFriendsPage', () => {
  let component: ListFriendsPage;
  let fixture: ComponentFixture<ListFriendsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
