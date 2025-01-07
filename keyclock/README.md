# Commands

Iniciar o serviço:
  docker compose up -d

Parar os containers:
  docker compose down

Reconstruir após alterações:
  docker compose up -d --build

Ver logs:
  docker compose logs -f

Construir sem cache
  docker compose build --no-cache
