Invocation: ansible-playbook -i inventory ./configuration.yml  --extra-vars="ansible_ssh_private_key_file=$TF_VAR_ansible_identity_file"

The identity file should be the key to access the server. That parameter is not related to the key to access the bastion, wich is specified in the inventory