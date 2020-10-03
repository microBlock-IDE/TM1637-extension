Blockly.defineBlocksWithJsonArray([
{
  "type": "tm1637_setup",
  "message0": "TM1637 setup CLK: %1 DIO: %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "clk",
      "options": [
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "dio",
      "options": [
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Show number on TM1637 display",
  "helpUrl": ""
},
{
  "type": "tm1637_show",
  "message0": "TM1637 show %1 colon %2",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number",
        "Boolean"
      ]
    },
    {
      "type": "field_dropdown",
      "name": "colon",
      "options": [
        [
          "hide",
          "False"
        ],
        [
          "show",
          "True"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Show text and number on TM1637 display",
  "helpUrl": ""
},
{
  "type": "tm1637_scroll",
  "message0": "TM1637 scroll %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "String",
        "Number",
        "Boolean"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Scroll text and number on TM1637 display",
  "helpUrl": ""
},
{
  "type": "tm1637_temperature",
  "message0": "TM1637 show temperature %1 °C",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Show temperature celsius on TM1637 display (-9 to 99)",
  "helpUrl": ""
},
{
  "type": "tm1637_time",
  "message0": "TM1637 show time %1 : %2 colon %3",
  "args0": [
    {
      "type": "input_value",
      "name": "value1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "value2",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "colon",
      "options": [
        [
          "hide",
          "False"
        ],
        [
          "show",
          "True"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Show time on TM1637 display",
  "helpUrl": ""
},
{
  "type": "tm1637_set_brightness",
  "message0": "TM1637 set brightness %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Set brightness of TM1637 display (0 - 7)",
  "helpUrl": ""
}
]);
