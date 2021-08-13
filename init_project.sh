#!/bin/bash

export DB_HOST=postgres 
export DB_USER=elyadata
export DB_PASSWORD=elyadataChallenge!
export DB=welcome_elyadata
export DB_PORT=5432
export APP_PORT=3000
export APP_UI_PORT=4200
export POSTGRES_USER=user
export POSTGRES_PASSWORD=password
export POSTGRES_DB=db

export INIT_DB_LOCAL_PATH=./db/01-init.sh
export INIT_DB_IMG_PATH=/docker-entrypoint-initdb.d/01-init.sh

docker-compose -f docker-compose.yml up
