## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Activity
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
notes       | string    |
distance    | string    |
elevation   | string    |
type        | string    |
date        | string    |
duration    | string    |

## Routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
route       | string    | not null
notes       | string    |
distance    | string    |
elevation   | string    |
type        | string    |
duration    | string    |
