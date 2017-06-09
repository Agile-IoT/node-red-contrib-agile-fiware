#!/usr/bin/env bash
IDAS_URL=${IDAS_URL:-http://localhost:4041}
curl $IDAS_URL/iot/devices -H"fiware-service: OpenIoT" -H"fiware-servicepath: /agile"
