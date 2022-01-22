SELECT reportsTo, COUNT(id) AS members, AVG(age) AS averageAge
FROM tableName
GROUP BY reportsTo
HAVING reportsTo IS NOT NULL
ORDER BY firstName