({
    name: "TM1673", // Category Name
    description: "Show number on TM1673",
    author: "microBlock",
    category: "Display",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="tm1637_setup">
                    <value name="clk">26</value>
                    <value name="dio">27</value>
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
        }
    ]
});
