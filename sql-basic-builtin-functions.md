In PostgreSQL, there are several built-in functions that can be used for various purposes, including mathematical operations, string manipulations, date and time functions, aggregate functions, and more. Here are a few examples:

### 1. Mathematical Functions:

#### `ABS()`

Returns the absolute value of a number.

```sql
SELECT ABS(-10); -- Result: 10
```

#### `ROUND()`

Rounds a numeric value to a specified number of decimal places.

```sql
SELECT ROUND(3.14159, 2); -- Result: 3.14
```

### 2. String Functions:

#### `UPPER()`

Converts a string to uppercase.

```sql
SELECT UPPER('hello'); -- Result: HELLO
```

#### `CONCAT()`

Concatenates multiple strings together.

```sql
SELECT CONCAT('Hello ', 'World'); -- Result: Hello World
```

### 3. Date and Time Functions:

#### `NOW()`

Returns the current date and time.

```sql
SELECT NOW(); -- Result: Current date and time
```

#### `DATE_PART()`

Extracts a specific part (e.g., year, month, day) from a date or timestamp.

```sql
SELECT DATE_PART('year', '2023-11-09'); -- Result: 2023
```

### 4. Aggregate Functions:

#### `SUM()`

Calculates the sum of a set of values.

```sql
SELECT SUM(salary) FROM employees; -- Result: Total salary of all employees
```

#### `AVG()`

Calculates the average of a set of values.

```sql
SELECT AVG(age) FROM employees; -- Result: Average age of employees
```

These are just a few examples of the built-in functions available in PostgreSQL. They offer a wide range of functionality to manipulate data, perform calculations, and work with different data types. The SQL standard and PostgreSQL itself provide a rich set of functions catering to various needs in database management.
