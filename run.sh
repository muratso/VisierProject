#/bin/bash
apt-get install ansible -y
ansible-playbook -i ./ansible/playbook/hosts ./ansible/playbook/playbook.yml
docker build -t="jenkins" ./docker/jenkins
docker build -t="protractor" ./docker/protractor
