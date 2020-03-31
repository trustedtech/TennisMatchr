USE tennis_matchr_db;

INSERT INTO Players (first_name, last_name, username, email, password, rating, createdAt, updatedAt)
VALUES 
    ("Andre", "Agassi", "aagassi", "aagassi@tennis.com", "aa12345", 6, "2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Pete", "Sampras", "psampras", "psampras@tennis.com", "ps12345", 6, "2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Roger", "Federer", "rfederer", "rfederer@tennis.com", "rf12345", 7, "2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("John", "McEnroe", "jmcenroe", "jmcenroe@tennis.com", "jm12345", 5, "2020-03-29T09:00:00", "2020-03-29T09:00:00");

INSERT INTO Events (creator, event_date, event_time, event_type, style, players_count, active, notes, createdAt, updatedAt)
VALUES 
    ("Andre Agassi","2020-03-30","3:00PM EST","match", "singles", 2, false, "Bring your own tennis balls.", "2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Pete Sampras","2020-04-10","7:00PM EST","match", "doubles", 4, true, "Best of three sets.","2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Pete Sampras","2020-04-12","9:00AM EST","practice", "open", 6, true, "Reserved three courts.","2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Andre Agassi","2020-03-28","7:00PM EST","match", "singles", 2, false, null,"2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Roger Federer","2020-04-07","11:00AM EST","tournament", "singles", 10, true, "Email me to be added to the ladder.","2020-03-29T09:00:00", "2020-03-29T09:00:00"),
    ("Roger Federer","2020-03-25","4:00PM EST","practice", "singles", 2, false, null,"2020-03-29T09:00:00", "2020-03-29T09:00:00");
