SELECT *
FROM languages

SELECT *
FROM collections
LIMIT 20

SELECT *
FROM books
WHERE publishedYear > 2000

SELECT *
FROM books
WHERE description like '%tình yêu%'

SELECT *
FROM users
ORDER BY id DESC