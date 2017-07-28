#!/usr/bin/env bash
#-------------------------------------------------------------------------------
# Copyright (C) 2017 ATOS.
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which accompanies this distribution, and is available at
# http://www.eclipse.org/legal/epl-v10.html
# 
# Contributors:
#     ATOS - initial API and implementation
#-------------------------------------------------------------------------------
set -e

IDAS_URL=${IDAS_URL:-http://localhost:4041}

curl -X POST \
    -H"Content-type: application/json" \
    -H"X-Auth-Token: $(<token)" \
    -H"Fiware-Service: OpenIoT" \
    -H"Fiware-ServicePath: /agile" \
    -d@- \
    $IDAS_URL/iot/devices <<EOF

{"devices": [
  { "device_id": "agile-temperature",
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
