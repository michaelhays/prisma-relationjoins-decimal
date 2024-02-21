Create the MySQL database:

```sh
mysql
```

```sql
CREATE DATABASE prismadecimal;
GRANT ALL ON prismadecimal.* TO 'user'@'localhost';
```

Generate the Prisma Client and update the database:

```sh
bun prisma generate
bun prisma db push
```

Run the script:

```sh
bun run.ts
```
