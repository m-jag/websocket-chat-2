#!/bin/bash
messages=$(curl -s -X GET http://localhost:8080/chat/ | jq -r .[]._id)
# echo $messages
message_count=$(echo $messages | wc -w)
if [ "$message_count" -eq 1 ]; then
    echo "found $message_count message"
else
    echo "found $message_count messages"
fi

counter=0
for msg in $messages; do
    curl -s -X DELETE http://localhost:8080/chat/$msg 1>null
    counter=$((counter+1))
done

if [ "$counter" -eq 1 ]; then
    echo "deleted $counter message"
else
    echo "deleted $counter messages"
fi