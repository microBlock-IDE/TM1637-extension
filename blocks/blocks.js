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
  "tooltip": "Show number on TM1637 display",
  "helpUrl": ""
}
]);
