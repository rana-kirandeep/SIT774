var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mydataBase');

	db.serialize(function() {
        
    db.run("CREATE TABLE IF NOT EXISTS feedback (id TEXT, rating TEXT,category TEXT, comment TEXT)");

    db.run("DELETE FROM feedback");
   //  db.run(`INSERT INTO feedback VALUES ("1", "2", "3","test")`);
   // db.run(`INSERT INTO feedback VALUES ("Karl", "deakin2016", "2")`);
   // db.run(`INSERT INTO feedback VALUES ("Belgrave", "barby", "3")`);
   // db.run(`INSERT INTO feedback VALUES ("Alice", "cooldeakin", "2")`);

        
    db.each("SELECT * FROM feedback", function(err, row) {
        console.log("id: " + row.id + "  category: " + row.category + "  comment: " + row.comment); 
    });
});

db.close();