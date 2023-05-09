# Create an instance
resource "openstack_compute_instance_v2" "web_server" {
  name            = var.web_server_name
  image_id        = var.image_id
  flavor_id       = var.flavor_name
  key_pair        = var.key_name
  security_groups = var.security_groups
  availability_zone = var.availability_zone

  network {
    name = var.network_name
  }
}

resource "openstack_blockstorage_volume_v2" "web_volume" {
  name = "web_volume"
  size = 10
}

resource "openstack_compute_volume_attach_v2" "va_1" {
  instance_id = "${openstack_compute_instance_v2.web_server.id}"
  volume_id   = "${openstack_blockstorage_volume_v2.web_volume.id}"
}

resource "openstack_networking_floatingip_v2" "fip_1" {
  pool = var.floatingip_pool
}

resource "openstack_compute_floatingip_associate_v2" "fip_1" {
  floating_ip = "${openstack_networking_floatingip_v2.fip_1.address}"
  instance_id = "${openstack_compute_instance_v2.web_server.id}"
  fixed_ip    = "${openstack_compute_instance_v2.web_server.network.0.fixed_ip_v4}"
}

# Output VM IP Address
output "web_serverip" {
  value = openstack_compute_instance_v2.web_server.access_ip_v4
}

resource "openstack_compute_instance_v2" "backend_server" {
  name            = var.backend_server_name
  image_id        = var.image_id
  flavor_id       = var.flavor_name
  key_pair        = var.key_name
  security_groups = var.security_groups
  availability_zone = var.availability_zone

  network {
    name = var.network_name
  }
}

resource "openstack_blockstorage_volume_v2" "backend_volume" {
  name = "backend_volume"
  size = 10
}

resource "openstack_compute_volume_attach_v2" "va_2" {
  instance_id = "${openstack_compute_instance_v2.backend_server.id}"
  volume_id   = "${openstack_blockstorage_volume_v2.backend_volume.id}"
}

# Output VM IP Address
output "backend_server_ip" {
  value = openstack_compute_instance_v2.backend_server.access_ip_v4
}

resource "openstack_networking_floatingip_v2" "fip_2" {
  pool = var.floatingip_pool
}

resource "openstack_compute_floatingip_associate_v2" "fip_2" {
  floating_ip = "${openstack_networking_floatingip_v2.fip_2.address}"
  instance_id = "${openstack_compute_instance_v2.backend_server.id}"
  fixed_ip    = "${openstack_compute_instance_v2.backend_server.network.0.fixed_ip_v4}"
}

