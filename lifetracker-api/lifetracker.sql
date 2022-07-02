\echo 'Delete and recreate lifetracker db?'
\prompt 'Enter for yes or control+c to cancel > ' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql
