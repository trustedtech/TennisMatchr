*Asterisk indicates minimum requirements

FUNCTIONALITIES:

    -   *Player registration
    -   *View available events by city/location
    -   *Join events
    -   *Add/Update/Delete events
    -   View player list by city, rating
    -   View player profiles
    -   Enter match scores
    -   View match results
    


ROUTES:




DATABASE:

*Players
    *id  (primary, auto increment)
    username
    password
    *first_name
    *last_name
    city
    availability    (varchar; controlled/selectable)
    img_url
    rating  [FK to ratings.rating]
    racquet

Ratings
    id  (?)
    rating  (DECIMAL [3,1])
    guideline   (test paragraph)

*Events
    *id
    *creator [FK to players.id]
    entry_date
    *event_date
    *event_time
    city
    *courts_id   (can be null/unspecified)   [FK to courts.id]

    type    (controlled/selectable: casual, practice, match, tournament) 
    style   (controlled/selectable: singles, doubles, open)
    max_players (int)
    min_players (int)
    *enrolling    (boolean)
    *status  (controlled/assigned: open, scheduled, cancelled, completed)
    active  (boolean)
    *notes   (text, optional, limit 10-150 chars no symbols)

*Events_Players (join table)
    *events_id   [FK to events.id]
    *players_id  [FK to players.id]

*Courts
    *id
    *title
    *address
    city
    lights  (boolean)
    quantity    (int)
    type    (hard, clay, lawn, mixed)

Results
    events_id    [FK to events.id]
    winner      [FK to players.id]