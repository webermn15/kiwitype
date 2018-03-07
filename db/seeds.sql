INSERT INTO excerpts (author, title, description, body) VALUES ('Robert Frost', 'The Road Not Taken', 'Published in 1962 as the first poem in the collection, "Mountain Interval"',  'I shall be telling this with a sigh, somewhere ages and ages hence; two roads diverged in a wood, and I, I took the one less traveled by. And that has made all the difference.');
INSERT INTO excerpts (author, title, description, body) VALUES ('JRR Tolkien', 'The Hobbit', 'The Hobbit, prequel to the famous Lord of the Rings series, was actually published before the LotR trilogy.',  '"What do you mean?" Gandalf said. "Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?"');
INSERT INTO excerpts (author, title, description, body) VALUES ('Ben Gibbard', 'I Will Follow You Into the Dark', '"It''s just this idea that what if somebody dies and we''re just floating, just stumbling around in infinite darkness, and I''m just trying to find some kind of spiritual kind of peace with myself, and the world." -Ben Gibbard',  'If heaven and hell decide that they both are satisfied; illuminate the ''No''s on their vacancy signs; if there''s no one beside you, when your soul embarks; then I''ll follow you into the dark.');








UPDATE excerpts
SET body = 'I shall be telling this with a sigh, somewhere ages and ages hence; two roads diverged in a wood, and I, I took the one less traveled by. And that has made all the difference.'
WHERE id = 1;