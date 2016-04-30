FROM iojs

MAINTAINER Eric Ferreira <ericarlos23@gmail.com>

# Install Protractor
RUN npm install -g protractor

# Criando o volume de espelho do codigo do automatizado
# Deve receber localização do codigo no 'run'
ENTRYPOINT ["protractor","/automated/src/e2e/conf.js"]

VOLUME ["/automated"]
