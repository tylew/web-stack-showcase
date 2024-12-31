variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  default     = "us-central1"
  description = "Region for GCP resources"
}

variable "bucket_name" {
  type        = string
  description = "Name of the GCS bucket"
}
