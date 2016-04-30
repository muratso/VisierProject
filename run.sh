#/bin/bash
apt-get install ansible -y
ansible-playbook -i ./ansible/playbook/hosts ./ansible/playbook/playbook.yml
