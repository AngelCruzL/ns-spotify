import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import * as mockRaw from '../../../data/user.json';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an object with "data" and "tokenSession" properties', (done) => {
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    };

    httpClientSpy.post.and.returnValue(of(mockResponse));

    service.sendCredentials$(user.email, user.password)
      .subscribe((apiResponse) => {
        const getProperties = Object.keys(apiResponse);
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokenSession');
        done();
      });
  });
});
