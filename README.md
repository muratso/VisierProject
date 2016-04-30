# VisierProject

## In order to setup the machine:
- Execute run.sh file (It will download ansible e provide the machine with docker)
- After the provisioning has been done, time to start our docker containers
- Assuming that you have already cloned this project, execute the following command:
  - docker run -d -p 8080:8080 -p 50000:50000 jenkins (This command will start jenkins and bind the ports 50000 and 8080 to the same as the host. The -d flag will daemonize the container, making it run in background)
- Next step is to configure our automated test to execute as a build on jenkins. 
