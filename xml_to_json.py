# xml_to_json.py
# Author: Natalia Mora
# This script converts a specified XML file to a JSON file with the same name.
# MongoDB accepts JSON as a viable data source.
# Used as a tool to test importing JSON data to our MongoDB database.

import json
import xmltodict

prefix = "" # FILL IN THE BLANK

# Read the XML file and convert to JSON
with open(f"{prefix}.xml") as xml_file:
    data_dict = xmltodict.parse(xml_file.read())
    json_data = json.dumps(data_dict)

# Save the JSON data to a file
with open(f"{prefix}.json", 'w') as json_file: #rename json file 
    json_file.write(json_data)