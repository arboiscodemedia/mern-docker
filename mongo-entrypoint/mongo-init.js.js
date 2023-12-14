db.getSiblingDB('admin')
db.createUser(
    {
        user: "mernadmin",
        pwd: "mernpassword",
        roles: [
            {
                role: "readWrite",
                db: "admin" 
            }
        ]
    }
) 
print("End Adding the User Roles.");