const { faker } = require('@faker-js/faker');

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'new_app',
  password: 'snehal13'
});

try {
connection.query("SHOW TABLES",(err,result)=> {
  if (err) throw err;
  console.log(result);
});
} catch (err) {
  console.log(err);
}

let getRandomUser = () => {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

console.log(getRandomUser());

//MySQL2 Package, (to connect node with MySQL)
//connection .end(), (to close connectiob)





