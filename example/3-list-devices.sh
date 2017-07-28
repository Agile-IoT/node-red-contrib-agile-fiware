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
curl $IDAS_URL/iot/devices -H"fiware-service: OpenIoT" -H"fiware-servicepath: /agile"
