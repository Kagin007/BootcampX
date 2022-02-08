-- SELECT MAX(average_assistance_request_duration)
-- FROM (
--   SELECT cohorts.name as cohort_name, AVG(completed_at-started_at) as average_assistance_request_duration
--   FROM assistance_requests

--   JOIN students
--     ON students.id=assistance_requests.student_id

--   JOIN cohorts
--     ON cohorts.id=students.cohort_id

--   GROUP BY cohort_name
--   ORDER BY AVG(completed_at-started_at)

-- ) as average_table

SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;