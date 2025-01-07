FROM quay.io/keycloak/keycloak:latest

# Copiar o arquivo de configuração do Keycloak
COPY config/my-realm.json /opt/keycloak/data/import/

# Defina variáveis de ambiente para configurar o Keycloak
ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin
ENV KEYCLOAK_IMPORT=/opt/keycloak/data/import/my-realm.json

# Executar o Keycloak
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--import-realm"]