SELECT * FROM user_db.user;

use user_db;

#sorting Query
SELECT * FROM user
ORDER BY city ASC;


SELECT * FROM user 
WHERE city REGEXP '^[A-Ea-e].*'
ORDER BY city;

#pagination Query
SELECT * FROM user
ORDER BY city ASC
LIMIT 5 OFFSET 0;

#Combining Pagination and Sorting:

SELECT * FROM users
ORDER BY city ASC
LIMIT 5 OFFSET 5;
# from the 6th row (zero-based index),  skipping the first 5 rows.


#Searching for users with their fullname or their email:

SELECT * FROM user WHERE fullname LIKE '%Meena%' OR email LIKE '%Meena@example.com%';

#filter by thier city & state
SELECT * FROM user WHERE city = 'Bangalore' AND state = 'KA';

SELECT * FROM user WHERE email LIKE '%gmail.com';


#Multiple filters using logical operators such as AND and OR
SELECT * FROM user WHERE city = 'Bangalore' OR city = 'Chennai';



DELETE FROM user
WHERE id = 2;
