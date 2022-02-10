const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const inputValues = [process.argv[2], process.argv[3]]

const queryString = `
SELECT students.id, students.name as student, cohorts.name
FROM students
JOIN cohorts ON cohort_id=cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`

pool.query(queryString, inputValues)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student} has an id of ${user.id} and was in the ${user.name} cohort`);
  })
});