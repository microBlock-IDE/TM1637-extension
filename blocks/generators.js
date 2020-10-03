Blockly.Python['tm1637_setup'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var dropdown_clk = block.getFieldValue('clk');
  var dropdown_dio = block.getFieldValue('dio');

  var code = `tm = tm1637.TM1637(clk=Pin(${dropdown_clk}), dio=Pin(${dropdown_dio}))\n`;
  return code;
};

Blockly.Python['tm1637_show'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_colon = block.getFieldValue('colon');

  var code = `tm.show(str(${value_value}), colon=${dropdown_colon})\n`;
  return code;
};