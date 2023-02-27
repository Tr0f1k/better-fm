
CREATE TABLE seasonChallenges (
    ID SERIAL PRIMARY KEY,
    name VARCHAR (255),
    description VARCHAR (255),
    diff INTEGER,
    section VARCHAR (255)
)

INSERT INTO seasonChallenges (name, description, diff, section) VALUES
    ('Knives Out', 'Sign Quincy Promes and use him in at least in 50% of matches', 1, 'Transfer'),
    ('Party is Proud of You', 'Sign a Chinese Player and use him at least in 50% of matches', 2, 'Transfer'),
    ('Dad?', "Sign a 38+ years old player to your club", 1, 'Transfer'),
    ('Rogerio Seni', 'Pick your goalkeeper as primary penalty and free kick taker', 3, 'Tactics'),
    ('Joga Bonito', 'Use 4-2-4 as your formation for the whole season', 4, 'Tactics');