BEGIN;
   DROP TABLE IF EXISTS users, articles, topics;

   CREATE TABLE users (
       id SERIAL PRIMARY KEY NOT NULL,
       name VARCHAR(100) NOT NULL,
       password TEXT NOT NULL,
       email TEXT NOT NULL
   );

   INSERT INTO users (name, password, email) 
   VALUES ('Jessie', 'testpassword', 'test@test.com');

    CREATE TABLE articles (
        id SERIAL PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        link TEXT NOT NULL,
        topic_id INTEGER NOT NULL,
        article_descr TEXT NOT NULL,
        keywords TEXT[] NOT NULL,
        img_url TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        likes INTEGER DEFAULT 0
    );

    INSERT INTO articles (title, link, topic_id, article_descr, keywords, img_url, user_id) 
    VALUES ('HTTPS explained with carrier pigeons',
    'https://medium.freecodecamp.org/https-explained-with-carrier-pigeons-7029d2193351', 
    11,
    'Great article covering encryption and http protocols',
    '{"HTTPS", "CRYPTOGRAPHY", "SECURITY"}',
    'https://cdn-images-1.medium.com/max/800/1*vHF6NNdZX9ziiW_uRYzvAA.png',
    1
    );

    CREATE TABLE topics (
        id SERIAL PRIMARY KEY NOT NULL,
        topic_name TEXT NOT NULL
    );

    INSERT INTO topics (topic_name) VALUES 
    ('CSS'),
    ('Design'),
    ('Node'),
    ('Databases'),
    ('APIs'),
    ('ES6'),
    ('Accessibility'),
    ('Callbacks & Asynchronicity'),
    ('DOM manipulation'),
    ('Testing'),
    ('Authentication & Cookies'),
    ('GitHub'),
    ('Soft Skills & Teamwork'),
    ('Express'),
    ('Handlebars'),
    ('React');


   COMMIT;