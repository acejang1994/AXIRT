import requests

endpoint = 'http://localhost:3000/issues'
data = {"issue": "CONTENT", "authorId": "AUTHORID"} 
r = requests.post(endpoint, data=data)
