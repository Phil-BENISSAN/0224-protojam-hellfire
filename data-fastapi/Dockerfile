FROM python:3.11.9-slim
WORKDIR /app

COPY . /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

# Bonne pratique : commandes RUN combinées 
RUN apt-get update && apt-get install -y

# Supprimer les caches de package :
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# Supprimer les fichiers temporaires :
RUN rm -rf /tmp/*
# Supprimer les logs :
RUN rm -rf /var/log/*
# Supprimer les caches de langage
RUN apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/* \ /var/cache/apt/archives/* /tmp/* /var/tmp/*

CMD ["python3", "main.py"]

EXPOSE 8000

HEALTHCHECK CMD curl --fail http://localhost:8000/_stcore/health

ENTRYPOINT ["python3", "./app/app_fastapi.py", "--server.port=8000", "--server.address=0.0.0.0"]