import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {CreateProductService} from "../../services/create-product-service/create-product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})

export class CreateProductComponent implements OnInit {

  imageURL: string | undefined;
  uploadForm: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private createProductService: CreateProductService,
  ) {
    this.uploadForm = this.formBuilder.group({
      bucket: '',
      file: []
    });
  }

  ngOnInit(): void {

  }

  showPreview(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.item(0);
    this.uploadForm.patchValue({
      file: file
    });

    this.uploadForm.get('file')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }

    // @ts-ignore
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append("bucket", this.uploadForm.value.bucket);
    formData.append("file", this.uploadForm.value.file);

    this.createProductService.createdData(formData);
    console.log('You uploaded data', formData);
  }

}

interface Post {
  Bucket: string;
  File: File[];
}