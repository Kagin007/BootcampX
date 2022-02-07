SELECT day, COUNT(day)
FROM assignments
GROUP BY day
ORDER BY day;