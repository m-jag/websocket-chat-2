# Mongoose doesn't validate on updates
# curl -X PATCH -v http://localhost:8080/chat/66b57990409b9a9af138e0e8 -H "Content-Type: application/json" -d '{"name": null, "time":null, "message": "test"}'
curl -X POST -v http://localhost:8080/chat/ -H "Content-Type: application/json" -d '{"name":"test",  "message": "test"}'