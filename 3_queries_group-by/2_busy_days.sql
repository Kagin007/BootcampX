SELECT day, COUNT(day)
FROM assignments
GROUP BY day
HAVING COUNT(day) >= 10
ORDER BY day;