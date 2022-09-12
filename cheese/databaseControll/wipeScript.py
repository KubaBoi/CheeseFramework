import psycopg2

connection = psycopg2.connect(
    host="localhost",
    database="judo",
    user="postgres",
    password="admin",
    port=5432
)

cursor = connection.cursor()
cursor.execute("select relname from pg_class where relkind='r' and relname !~ '^(pg_|sql_)';")
tables = cursor.fetchall()

for table in tables:
    print(f"delete from {table[0]};")