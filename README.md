# VisierProject

## In order to setup the machine:
- Execute run.sh file (It will download ansible e provide the machine with docker)
- After the provisioning has been done, time to start our docker containers
- Assuming that you have already cloned this project, execute the following command:
  - `docker run -d -p 8080:8080 -p 50000:50000 jenkins` (This command will start jenkins and bind the ports 50000 and 8080 to the same as the host. The -d flag will daemonize the container, making it run in background)
  - To get the jenkins fully running and accessible you must run the command:
    - `docker exec -it $(docker ps -q -f ancestor=jenkins) cat /var/jenkins_home/secrets/initialAdminPassword` (The command will cat the initialAdminPassword file inside the container and output the password on the terminal.) OBS: If it doesn't return our password, it probably means that our container has stopped or it didn't started up properly.
    - Now with our jenkins password we can access our <ip>:8080 and input the password on our jenkins interface.
- Next step is to configure our automated test to execute as a build on jenkins. 
- After input the admin password on jenkins it will ask you if you want to install any plugin.
- Assuming that you already know which plugins you'll need, we can follow to the next step.
