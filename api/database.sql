
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

CREATE TABLE scenarios (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (555),
    condition VARCHAR (555),
    hard VARCHAR (255),
    difficulty INTEGER,
    imgurl VARCHAR (255),
    difurl VARCHAR (255)
);

INSERT INTO scenarios (name, description, condition, hard, difficulty, imgurl, difurl) VALUES
    ('Turin is maroon!', 'This season, Juventus had to pay for their financial atrocities against the world of football. Now, in this moment of history, take place of Ivan Jurić and prove to everyone that there is only one great club in Turin! Or maybe in the whole Italy...', 'Finish above Juventus in Serie A Table|Win at least one game against Juventus in Serie A or Coppa Italia', 'Qualify for either of three European club tournaments', 3, './images/scenarios/maroon.jpg', './images/diff/3star.png')
    ('Trophy Cabinet', 'It has been more than 15 years of trophy drought in Tottenham. Daniel Levy decided to get rid of Antonio Conte, and give you a shot at the wheel of Tottenham. It is time to put it to an end! But do not forget that Levy is not so keen on waiting, so you are running out of time!!', 'Win any top-flight trophy in one season|Qualify for Champons League next season', 'Make a double', 2, './images/scenarios/cabinet.jpg', './images/diff/2star.png')

INSERT INTO matchChallenges (name, description, difficulty, section, imgurl, difurl) VALUES
    ('Alphabet', 'Sort your players by alphabet and put first 11 players in the squad', 3, 'Squad', './images/matchChallenges/alphabet.jpg', './images/diff/3star.png'),
    ('Smart Decision', 'Substitute your player as soon as he scores until you run out of subs', 4, 'Management', './images/matchChallenges/smart.jpg', './images/diff/4star.png'),
    ('Future Star', 'Put the least skilled player from your academy in your starting 11 and play him for at least 45 minutes', 4, 'Squad', './images/matchChallenges/future.jpg', './images/diff/4star.png')

INSERT INTO seasonChallenges (name, description, difficulty, section, imgurl, difurl) VALUES
    ('Knives Out', 'Sign Quincy Promes and use him in at least in 50% of matches', 1, 'Transfers', './images/seasonChallenges/knifesout.jpg', './images/diff/1star.png'),
    ('Party is Proud of You', 'Sign a Chinese Player and use him at least in 50% of matches', 3, 'Transfers', './images/seasonChallenges/party.jpg', './images/diff/3star.png'),
    ('Joga Bonito', 'Use 4-2-4 as your formation for the whole season', 3, 'Tactics', './images/seasonChallenges/joga.jpg', './images/diff/3star.png'),
    ('Rogerio Ceni', 'Make your goalkeeper as primary penalty and free kick taker', 3, 'Management', './images/seasonChallenges/ceni.jpg', './images/diff/3star.png'),
    ('Prison FC', 'Sign Mason Greenwood and play him in at least 50% of matches', 1, 'Transfers', './images/seasonChallenges/prison.jpg', './images/diff/1star.png'),
    ('Dad?', 'Sign a player that has 38+ years of age and play him in at least 50% of mathes', 3, 'Transfer', './images/seasonChallenges/dad.jpg', './images/diff/3star.png'),
    ('Mental Breakdown', 'Every time your team loses you have to throw a bottle in the dressing room', 3, 'Behavior', './images/seasonChallenges/mental.jpg', './images/diff/3star.png'),
    ('Doppelganger', 'Each match you have to use the same formation as your opponent', 4, 'Tactics', './images/seasonChallenges/doppel.jpg', './images/diff/4star.png');