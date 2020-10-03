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

  var code = `tm.show(${value_value}, colon=${dropdown_colon})\n`;
  return code;
};

Blockly.Python['tm1637_scroll'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `tm.scroll(${value_value}, delay=150)\n`;
  return code;
};

Blockly.Python['tm1637_temperature'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `tm.temperature(${value_value})\n`;
  return code;
};

Blockly.Python['tm1637_time'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_colon = block.getFieldValue('colon');

  var code = `tm.show('{:>2d}{:02d}'.format(${value_value1}, ${value_value2}), colon=${dropdown_colon})\n`;
  return code;
};

Blockly.Python['tm1637_set_brightness'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `tm.brightness(${value_value})\n`;
  return code;
};
