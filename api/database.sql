
CREATE TABLE seasonChallenges (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (255),
    difficulty INTEGER,
    section VARCHAR (255),
    imgurl VARCHAR (255),
    difurl VARCHAR (255)
);

CREATE TABLE matchChallenges (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (255),
    difficulty INTEGER,
    section VARCHAR (255),
    imgurl VARCHAR (255),
    difurl VARCHAR (255)
);

INSERT INTO matchChallenges (name, description, difficulty, section, imgurl, difurl) VALUES
    ('Alphabet', 'Sort your players by alphabet and put first 11 players in the squad', 3, 'Squad', './images/matchChallenges/alphabet.jpg', './images/diff/3star.png'),
    ('Smart Decision', 'Substitute your player as soon as he scores until you run out of subs', 4, 'Management', './images/matchChallenges/smart.jpg', './images/diff/4star.png')

INSERT INTO seasonChallenges (name, description, difficulty, section, imgurl, difurl) VALUES
    ('Knives Out', 'Sign Quincy Promes and use him in at least in 50% of matches', 1, 'Transfers', './images/seasonChallenges/knifesout.jpg', './images/diff/1star.png'),
    ('Party is Proud of You', 'Sign a Chinese Player and use him at least in 50% of matches', 3, 'Transfers', './images/seasonChallenges/party.jpg', './images/diff/3star.png'),
    ('Joga Bonito', 'Use 4-2-4 as your formation for the whole season', 3, 'Tactics', './images/seasonChallenges/joga.jpg', './images/diff/3star.png'),
    ('Rogerio Ceni', 'Make your goalkeeper as primary penalty and free kick taker', 3, 'Management', './images/seasonChallenges/ceni.jpg', './images/diff/3star.png'),
    ('Prison FC', 'Sign Mason Greenwood and play him in at least 50% of matches', 1, 'Transfers', './images/seasonChallenges/prison.jpg', './images/diff/1star.png'),
    ('Dad?', 'Sign a player that has 38+ years of age and play him in at least 50% of mathes', 3, 'Transfer', './images/seasonChallenges/dad.jpg', './images/diff/3star.png'),
    ('Mental Breakdown', 'Every time your team loses you have to throw a bottle in the dressing room', 3, 'Behavior', './images/seasonChallenges/mental.jpg', './images/diff/3star.png'),
    ('Doppelganger', 'Each match you have to use the same formation as your opponent', 4, 'Tactics', './images/seasonChallenges/doppel.jpg', './images/diff/4star.png');
