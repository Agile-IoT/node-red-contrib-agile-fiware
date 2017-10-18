[
    {
        "id": "b7770c7.af87bf",
        "label": "Flow 1",
        "type": "tab"
    },
    {
        "id": "fa46e6ab.54e888",
        "label": "Flow 2",
        "type": "tab"
    },
    {
        "apikey": "",
        "id": "71f3af12.39b1f",
        "idas_server_url": "http://172.24.38.56:7896/iot/d",
        "service": "OpenIoT",
        "servicepath": "/agile",
        "type": "fiware-config",
        "z": ""
    },
    {
        "host": "agile",
        "id": "91a76986.594468",
        "port": "8080",
        "type": "agile-config-server",
        "z": ""
    },
    {
        "disp": true,
        "id": "9f6076c.e111288",
        "name": "Temperature",
        "tab": "bc120e4e.c9c43",
        "type": "ui_group",
        "width": "6",
        "z": ""
    },
    {
        "icon": "dashboard",
        "id": "bc120e4e.c9c43",
        "name": "Home",
        "type": "ui_tab",
        "z": ""
    },
    {
        "id": "b1d9c1f6.f43bd",
        "site": {
            "allowSwipe": "false",
            "dateFormat": "DD/MM/YYYY",
            "hideToolbar": "false",
            "name": "Node-RED Dashboard",
            "sizes": {
                "cx": 6,
                "cy": 6,
                "gx": 6,
                "gy": 6,
                "px": 0,
                "py": 0,
                "sx": 48,
                "sy": 48
            }
        },
        "theme": {
            "customTheme": {
                "baseColor": "#4B7930",
                "baseFont": "Helvetica Neue",
                "default": "#4B7930",
                "name": "Untitled Theme 1"
            },
            "darkTheme": {
                "baseColor": "#097479",
                "baseFont": "Helvetica Neue",
                "default": "#097479",
                "edited": false
            },
            "lightTheme": {
                "baseColor": "#0094CE",
                "baseFont": "Helvetica Neue",
                "default": "#0094CE",
                "edited": true,
                "reset": false
            },
            "name": "theme-light",
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "edited": false,
                    "value": "#0094CE"
                },
                "group-backgroundColor": {
                    "edited": false,
                    "value": "#ffffff"
                },
                "group-borderColor": {
                    "edited": false,
                    "value": "#ffffff"
                },
                "group-textColor": {
                    "edited": false,
                    "value": "#1bbfff"
                },
                "page-backgroundColor": {
                    "edited": false,
                    "value": "#fafafa"
                },
                "page-sidebar-backgroundColor": {
                    "edited": false,
                    "value": "#ffffff"
                },
                "page-titlebar-backgroundColor": {
                    "edited": false,
                    "value": "#0094CE"
                },
                "widget-backgroundColor": {
                    "edited": false,
                    "value": "#0094ce"
                },
                "widget-borderColor": {
                    "edited": false,
                    "value": "#ffffff"
                },
                "widget-textColor": {
                    "edited": false,
                    "value": "#111111"
                }
            }
        },
        "type": "ui_base"
    },
    {
        "attribute": "t",
        "deviceid": "temp",
        "id": "18689ae8.ff84d5",
        "name": "fiware send",
        "server": "71f3af12.39b1f",
        "type": "fiware-send-data",
        "wires": [
            []
        ],
        "x": 590,
        "y": 260,
        "z": "b7770c7.af87bf"
    },
    {
        "componentId": "DummyData",
        "deviceId": "dummy001122334455",
        "id": "7d1e720e.f5c82c",
        "interval": "10",
        "name": "dummy",
        "server": "91a76986.594468",
        "type": "agile-device-read",
        "wires": [
            [
                "8f359a6e.21ec18"
            ]
        ],
        "x": 84,
        "y": 260,
        "z": "b7770c7.af87bf"
    },
    {
        "id": "8f359a6e.21ec18",
        "idm": "http://agile-security:3000",
        "name": "",
        "tokensource": "session",
        "type": "idm-token",
        "userinfo": false,
        "wires": [
            [
                "8490f315.5986b"
            ]
        ],
        "x": 229.5,
        "y": 260,
        "z": "b7770c7.af87bf"
    },
    {
        "id": "8bf5fac6.ed96b8",
        "idm": "http://agile-security:3000",
        "name": "idm apikey",
        "property": "attribute",
        "type": "idm-attribute",
        "wires": [
            [
                "18689ae8.ff84d5"
            ]
        ],
        "x": 408.5,
        "y": 260,
        "z": "b7770c7.af87bf"
    },
    {
        "func": "msg.entity_id = \"agile!@!agile-local\";\nmsg.entity_type = \"user\";\nmsg.attribute = \"credentials.fiware-idas\";\nmsg.destination_property = \"apikey\";\nreturn msg;",
        "id": "8490f315.5986b",
        "name": "idm apikey params",
        "noerr": 0,
        "outputs": 1,
        "type": "function",
        "wires": [
            [
                "8bf5fac6.ed96b8"
            ]
        ],
        "x": 310.5,
        "y": 323,
        "z": "b7770c7.af87bf"
    },
    {
        "crontab": "",
        "id": "262f278a.3b0c38",
        "name": "trigger",
        "once": true,
        "payload": "",
        "payloadType": "date",
        "repeat": "10",
        "topic": "",
        "type": "inject",
        "wires": [
            [
                "e79398f8.9a4608"
            ]
        ],
        "x": 136.5,
        "y": 203,
        "z": "fa46e6ab.54e888"
    },
    {
        "id": "d39a7c78.e1a42",
        "method": "GET",
        "name": "request orion",
        "ret": "txt",
        "tls": "",
        "type": "http request",
        "url": "http://172.24.38.56:1026/v2/entities/agile-temperature?attrs=temperature",
        "wires": [
            [
                "f846eb5d.4678c8"
            ]
        ],
        "x": 501.5,
        "y": 204,
        "z": "fa46e6ab.54e888"
    },
    {
        "func": "msg.headers = {\n  \"Fiware-Service\": \"OpenIoT\",\n  \"Fiware-ServicePath\": \"/agile\"\n};\nreturn msg;",
        "id": "e79398f8.9a4608",
        "name": "prepare req",
        "noerr": 0,
        "outputs": 1,
        "type": "function",
        "wires": [
            [
                "d39a7c78.e1a42"
            ]
        ],
        "x": 317.5,
        "y": 204,
        "z": "fa46e6ab.54e888"
    },
    {
        "chartType": "line",
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "cutout": 0,
        "group": "9f6076c.e111288",
        "height": 0,
        "id": "2bf022e1.df6f3e",
        "interpolate": "linear",
        "label": "chart",
        "legend": "false",
        "name": "",
        "nodata": "",
        "order": 0,
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "type": "ui_chart",
        "width": 0,
        "wires": [
            [],
            []
        ],
        "x": 413.5,
        "xformat": "HH:mm:ss",
        "y": 312,
        "ymax": "",
        "ymin": "",
        "z": "fa46e6ab.54e888"
    },
    {
        "func": "var o = JSON.parse(msg.payload);\nmsg.payload = o[\"temperature\"][\"value\"];\nreturn msg;",
        "id": "f846eb5d.4678c8",
        "name": "parse chart",
        "noerr": 0,
        "outputs": 1,
        "type": "function",
        "wires": [
            [
                "2bf022e1.df6f3e"
            ]
        ],
        "x": 265.5,
        "y": 312,
        "z": "fa46e6ab.54e888"
    }
]
