variable "project" {}

variable "portal_net" {
  default = "10.200.0.0/16"
}

variable "compute_count" {
  default = 2
}

variable "cluster_name" {
  default = "testing"
}

variable "network_name" {
  default = "internal"
}

variable "floatingip_pool" {
  default = "external"
}

variable "flavor_name" {
  default = "m1.medium"
}

variable "username" {
  description = "Your openstack username"
}
variable "instance_name" {
  description = "Your openstack username"
}

variable "password" {
  description = "Your openstack password"
}

variable "tenant" {
  description = "Your openstack tenant/project"
}

variable "auth_url" {
  description = "Your openstack auth URL"
}

variable "public_key_path" {
  description = "The path of the ssh pub key"
  default = "~/.ssh/tharuk-cloud.key.pub"
}

variable "network_zone" {
  description = "set to network zone as a nova"
  default = "nova"
}

variable "security_groups" {
  description = "set to security groups"
  default = ["default"]
}

variable "web_server_name" {
  description = "set to security groups"
  default = "default"
}

variable "backend_server_name" {
  description = "set to security groups"
  default = "default"
}

variable "image_id" {
  description = "set to security groups"
  default = "default"
}

variable "availability_zone" {
  description = "set to security groups"
  default = "default"
}
variable "key_name" {
  description = "set to security groups"
  default = "default"
}
