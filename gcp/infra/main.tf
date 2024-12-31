terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0.0"
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Example: enable just the Storage API
resource "google_project_service" "storage_api" {
  project = var.project_id
  service = "storage.googleapis.com"
}

# Create a bucket for storing files (if needed)
resource "google_storage_bucket" "my_bucket" {
  name                        = var.bucket_name
  location                    = var.region
  uniform_bucket_level_access = true
  force_destroy               = true
}
