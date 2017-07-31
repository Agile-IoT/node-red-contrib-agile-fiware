#!/usr/bin/env bash
set -e

IDAS_URL=${IDAS_URL:-http://localhost:4041}

curl -X POST \
    -H"Content-type: application/json" \
    -H"X-Auth-Token: a-token" \
    -H"Fiware-Service: OpenIoT" \
    -H"Fiware-ServicePath: /agile" \
    -d@- \
    $IDAS_URL/iot/devices <<EOF

{"devices": [
  { "device_id": "temp",
    "entity_name": "agile-temperature",
    "entity_type": "thing",
    "timezone": "Europe/Madrid",
    "attributes": [
    { "object_id": "t",
      "name": "temperature",
      "type": "int"
    } ],
 "static_attributes": [
    { "name": "att_name",
      "type": "string",
      "value": "value"
    }]}]}
EOF
