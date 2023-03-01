
CREATE TABLE seasonChallenges (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (255),
    diff INTEGER,
    section VARCHAR (255),
    imgurl VARCHAR (255),
    difurl VARCHAR (255)
)

INSERT INTO seasonChallenges (name, description, diff, section, imgurl, difurl) VALUES
    ('Knives Out', 'Sign Quincy Promes and use him in at least in 50% of matches', 1, 'Transfers', './images/knifesout.jpg', './images/1star.png'),
    ('Party is Proud of You', 'Sign a Chinese Player and use him at least in 50% of matches', 3, 'Transfers', './images/party.jpg', './images/3star.png'),
    ('Joga Bonito', 'Use 4-2-4 as your formation for the whole season', 3, 'Tactics', './images/joga.jpg', './images/3star.png'),
    ('Rogerio Seni', 'Pick your goalkeeper as primary penalty and free kick taker', 3, 'Management', './images/seni.jpg' './images/3star.png'),
    ('Prison FC', 'Sign Mason Greenwood and play him in at least 50% of matches', 1, 'Transfers', './images/prison.jpg', './images/1star.png')
    ('Dad?', 'Sign a player that has 38+ years of age and play him in at least 50% of mathes', 3, 'Transfer', './images/dad.jpg', './images/3star.png'),
    ('Mental Breakdown', 'Every time your team loses you have to throw a bottle in the dressing room', 3, 'Behavior', './images/mental.jpg', './images/3star.png'),
    ('Doppelganger', 'Each match you have to use the same formation as your opponent', 4, 'Tactics', './images/doppel.jpg', './images/4star.png')

