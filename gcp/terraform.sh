#!/usr/bin/env bash
set -e  # Exit on any error

PROJECT_ID="web-stack-showcase"
REGION="us-west1"
BUCKET_NAME="archive-bucket-777"

# Navigate to the Terraform directory
cd infra  

# Initialize Terraform
terraform init

# Apply the Terraform config. -auto-approve means no confirmation prompt.
terraform apply \
  -auto-approve \
  -var="project_id=${PROJECT_ID}" \
  -var="region=${REGION}" \
  -var="bucket_name=${BUCKET_NAME}"

# Grab the function URL from Terraform output
FUNCTION_URL=$(terraform output -raw cloud_function_url)
echo "Cloud Function deployed at: ${FUNCTION_URL}"
