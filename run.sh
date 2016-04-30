#/bin/bash
apt-get install ansible -y
ansible-playbook -i ./playbook/roles/hosts playbook.yml --check
