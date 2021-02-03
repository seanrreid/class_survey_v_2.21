# Class Survey version 2.21 (February 2021)
# Exercises

## Class Survey v2

We're going to create an app to rank our understanding of the following topics:

* HTML
* CSS
* Javascript
* PostgreSQL
* Node
* Express

We'll rank our understanding of the topics using the following 5 point scale:

* Awesome, 5
* Great, 4
* Good, 3
* Okay, 2
* Poor, 1
* Unranked, 0

### The Assignment v1

#### Create a PSQL database with _two_ tables

* `topics` table with columns
  * `id`
  * `topic_name`
  * `topic_score` (this is a FOREIGN KEY value that points to the `ranking_scale` PRIMARY KEY)
* `ranking_scale` table with columns
  * `id` (This is the PRIMARY KEY, that points to `topics.topic_score`)
  * `ranking_title`
  * `ranking_value`

#### Create a Node + Express App

* Create the Express App
* Install `pg-promise` and `express-es6-template-engine`
* Create an index route that queries the database, aka `GET`, and returns the topics, and your score (1-5)

### The Assignment v2

* __MODEL__: Add a new method (choose static or instance) to change the rank/status of your knowledge of `HMTL` to a different rank/status
* __VIEW__:  Add an HTML form to handle submitting entries to your `POST` route
* __CONTROLLER__: Add a `POST` route to the Express App
