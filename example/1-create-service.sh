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

IDAS_URL=${IDAS_URL:-http://localhost:4041}
IDAS_KEY=${IDAS_KEY:-4jggokgpepnvsb2uv4s40d59ov}

curl -v --include \
     --request POST \
     --header "Content-Type: application/json" \
     --header "Fiware-Service: OpenIoT" \
     --header "Fiware-ServicePath: /agile" \
     -d @- $IDAS_URL/iot/services <<EOF
{
  "services": [
    {
      "apikey": "$IDAS_KEY",
      "token": "a-token",
      "cbroker": "http://127.0.0.1:1026",
      "entity_type": "thing",
      "resource": "/iot/d"
    }
   ]
}
EOF
