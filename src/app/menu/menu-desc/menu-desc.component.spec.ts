import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuDescriptionComponent } from './menu-desc.component';
import { MenuService } from 'f:/my-app/src/app/core/services/menu.service';
import { CartService } from 'f:/my-app/src/app/core/services/cart.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('MenuDescriptionComponent', () => {
  let component: MenuDescriptionComponent;
  let fixture: ComponentFixture<MenuDescriptionComponent>;
  let menuService: MenuService;
  let cartService: CartService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDescriptionComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1' // mock the route parameter
              }
            }
          }
        },
        MenuService,
        CartService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDescriptionComponent);
    component = fixture.componentInstance;
    menuService = TestBed.inject(MenuService);
    cartService = TestBed.inject(CartService);
    route = TestBed.inject(ActivatedRoute);

    spyOn(menuService, 'getMenuById').and.returnValue(
      of({
        id: '1',
        name: 'Menu Item 1',
        restaurant: 'Restaurant 1',
        category: 'Category 1',
        price: 10.99,
        image: 'https://example.com/image1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get menu details by id', () => {
    expect(component.menu).toBeTruthy();
    expect(component.menu.id).toBe('1');
    expect(component.menu.name).toBe('Menu Item 1');
    expect(component.menu.restaurant).toBe('Restaurant 1');
    expect(component.menu.category).toBe('Category 1');
    expect(component.menu.price).toBe(10.99);
    expect(component.menu.image).toBe('https://example.com/image1.jpg');
    expect(component.menu.description).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

 
});
