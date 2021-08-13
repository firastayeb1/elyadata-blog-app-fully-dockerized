#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  ALTER ROLE $APP_DB_USER SUPERUSER;
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE t_property (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(50) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        author VARCHAR(50) NOT NULL,
        dislikes NUMERIC(5) NOT NULL,
        likes NUMERIC(5) NOT NULL,
        img VARCHAR(200) 
    );

    INSERT INTO t_property
    (id, title, content, author, dislikes, likes)
    VALUES
    ('a81bc81b-dead-4e5d-abff-90865d1e13b1', 'First Blog', 'First Content', 'Firas',0, 0),
    ('a153fd13-afdb-4682-836e-b6a13d25a530', 'Second Blog', 'Second Content', 'Oussama',0, 0);

  COMMIT;
EOSQL