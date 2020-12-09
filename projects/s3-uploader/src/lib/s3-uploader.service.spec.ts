import { TestBed } from '@angular/core/testing';

import { S3UploaderService } from './s3-uploader.service';

describe('S3UploaderService', () => {
  let service: S3UploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3UploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
