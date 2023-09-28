# mongodb_connection.py
# Author: Natalia Mora
# This script allows you to connect to MongoDB and test the connection locally.
# There is also a reserved space in the try block where the user can add their own MongoDB commands.
# Use this script as a back-end connection template.
# CREDIT: MongoDB sample script, I added implementation of certifi to resolve SSL certificate verification issues.

import pymongo
import certifi

username = "" # FILL IN THE BLANK
password = "" # FILL IN THE BLANK
cluster = "brewmasters-cauldron"

# Define the MongoDB Atlas URI (an encrypted link to our DB)
uri = f"mongodb+srv://{username}:{password}@{cluster}.knpgadz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp&ssl=true&ssl_cert_reqs=CERT_NONE"

try:
    # Create a new client and connect to the server
    client = pymongo.MongoClient(uri, tlsCAFile=certifi.where())
    print("Connected to MongoDB successfully!")

    # Ping the server to confirm the connection
    db = client.test
    db.command('ping')
    print("Ping successful.")

    #TODO Write MongoDB code here

except pymongo.errors.ConnectionFailure as e:
    print("Could not connect to server:", e)

finally:
    # Close the connection
    client.close()
    print("Connection closed.")
