({
    name: "TM1637", // Category Name
    description: "Show number on TM1637",
    author: "IOXhop.com",
    category: "Display",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="tm1637_setup">
                    <field name="clk">26</field>
                    <field name="dio">27</field>
                </block>
            `
        },
        {
            xml: `
                <block type="tm1637_show">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">1234</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tm1637_scroll">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tm1637_temperature">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">25</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tm1637_time">
                    <value name="value1">
                        <shadow type="math_number">
                            <field name="NUM">18</field>
                        </shadow>
                    </value>
                    <value name="value2">
                        <shadow type="math_number">
                            <field name="NUM">6</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="tm1637_set_brightness">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">7</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
