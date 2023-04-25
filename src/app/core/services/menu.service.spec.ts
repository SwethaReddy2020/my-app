import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MenuService } from './menu.service';
import { Menu } from '../../../models/menu.model';

describe('MenuService', () => {
  let service: MenuService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MenuService]
    });
    service = TestBed.inject(MenuService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all menus', () => {
    const mockMenus: Menu[] = [
      {
        id: '1',
        name: 'Menu Item 1',
        restaurant: 'Restaurant 1',
        category: 'Category 1',
        price: 10.99,
        image: 'https://example.com/image1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: '2',
        name: 'Menu Item 2',
        restaurant: 'Restaurant 2',
        category: 'Category 2',
        price: 15.99,
        image: 'https://example.com/image2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ];

    service.getAllMenus().subscribe(menus => {
      expect(menus).toEqual(mockMenus);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockMenus);
  });

  it('should get a menu by ID', () => {
    const mockMenu: Menu = {
      id: '1',
      name: 'Menu Item 1',
      restaurant: 'Restaurant 1',
      category: 'Category 1',
      price: 10.99,
      image: 'https://example.com/image1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    service.getMenuById('1').subscribe(menu => {
      expect(menu).toEqual(mockMenu);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMenu);
  });

  it('should add a new menu', () => {
    const newMenu: Menu = {
      id: '0',
      name: 'New Menu Item',
      restaurant: 'Restaurant 1',
      category: 'Category 1',
      price: 12.99,
      image: 'https://example.com/newimage.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    const expectedMenu: Menu = {
      id: '3',
      name: 'New Menu Item',
      restaurant: 'Restaurant 1',
      category: 'Category 1',
      price: 12.99,
      image: 'https://example.com/newimage.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    service.addMenu(newMenu).subscribe(menu => {
      expect(menu).toEqual(expectedMenu);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('POST');
    req.flush(expectedMenu);
  });

  it('should update an existing menu', () => {
   
      const updatedMenu: Menu = {
        id: '1',
        name: 'Updated Menu Item',
        restaurant: 'Restaurant 1',
        category: 'Category 1',
        price: 15.99,
        image: 'https://example.com/updatedimage.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      };
  
      service.updateMenu(updatedMenu).subscribe(menu => {
        expect(menu).toEqual(updatedMenu);
      });
  
      const req = httpMock.expectOne(`${service['apiUrl']}/${updatedMenu.id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(updatedMenu);
    });
  
    it('should delete an existing menu', () => {
      const idToDelete = '1';
  
      service.deleteMenu(idToDelete).subscribe();
  
      const req = httpMock.expectOne(`${service['apiUrl']}/${idToDelete}`);
      expect(req.request.method).toBe('DELETE');
      req.flush({});
    });
});
