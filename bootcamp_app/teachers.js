const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

//protecting from SQL injection
const cohortName = [process.argv[2]];

const queryString = `
  SELECT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests
    ON assistance_requests.teacher_id=teachers.id
  JOIN students
    ON students.id = assistance_requests.student_id
  JOIN cohorts
    ON cohorts.id = students.cohort_id
  WHERE cohorts.name = $1
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name;
  `;

//we know queryString is safe b/c i wrote it. The cohortName is an input from the user. Both are sent into '.query' method seperatly and joined together safely by postgres in the query.
pool.query(queryString, cohortName).then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`)
  })
})