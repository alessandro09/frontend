/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'

import { ApiService } from './api.service'


describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
