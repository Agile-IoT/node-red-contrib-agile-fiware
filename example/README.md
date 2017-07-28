<!--
# Copyright (C) 2017 ATOS.
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which accompanies this distribution, and is available at
# http://www.eclipse.org/legal/epl-v10.html
# 
# Contributors:
#     ATOS - initial API and implementation
-->

In order to run this example, you have to:

* `docker-compose up` : prepare the FIWARE servers. You must make ports 1026 and 4041 accesible.
* `1-create-service.sh` : create the IoT service
* `2-register.sh` : register a device in the created service
* Import the workflow. Addresses in config node and request to Orion must be changed.

The workflow gets the API key from IDM. This means that you should insert the API key in the IDM first. If you do not plan to use the IDM, you can set the API key directly in the config node.
