create table users (
  id serial primary key,
  name varchar(255) not null,
  age smallint not null,

  created_at timestamp default CURRENT_TIMESTAMP not null,
  updated_at timestamp
);

create table posts (
  id serial primary key,
  status varchar(255) not null,
  title varchar(255) not null,
  text text not null,

  created_at timestamp default CURRENT_TIMESTAMP not null,
  updated_at timestamp,

  user_id integer references users
);

create table comments (
  id serial primary key,
  text text not null,

  created_at timestamp default CURRENT_TIMESTAMP not null,
  updated_at timestamp,

  user_id integer references users,
  post_id integer references posts
);

insert into users (name, age)
  values
    ('Ivan', 21),
    ('Masha', 18),
    ('Nina', 5),
    ('Grisha', 34);

insert into posts (status, title, text, user_id)
  values
    ('draft', 'Superpost', 'Lorem ipsum 1', (select id from users where name='Ivan' limit 1)),
    ('published', 'Padenie', 'Lorem ipsum 2', (select id from users where name='Ivan' limit 1)),
    ('draft', 'Siyanie 42', 'Lorem ipsum 3', (select id from users where name='Masha' limit 1)),
    ('archived', 'Superpost 69', 'Lorem ipsum 4', (select id from users where name='Grisha' limit 1));

insert into comments (text, user_id, post_id)
  values
    ('Nice', (select id from users where name='Ivan'), (select id from posts where status='published' limit 1)),
    ('Shit', (select id from users where name='Masha'), (select id from posts where status='published' limit 1));
