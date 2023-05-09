terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
    openstack = {
      source = "terraform-provider-openstack/openstack"
      version = "1.51.1"
    }
  }
}

provider "openstack" {
  auth_url = "${var.auth_url}"
  user_name = "${var.username}"
  password = "${var.password}"
  tenant_name="${var.tenant}"
}
