(function(wakandaratings) {
	wakandaratings.inherit(WAF.require('waf-behavior/studio'));
     /*Display name of the widget*/
	wakandaratings.setDescription('wakandaratings');

//      /*Define your widget's properties*/
	wakandaratings.addAttributes([{
        name: 'data-max',
        description: 'Max Value',
        type: 'string',
        defaultValue:'5'
    }]);
    
    

//      /*Default width and height of your widget when added to the Page*/
	wakandaratings.setWidth('180');
	wakandaratings.setHeight('21');

//      /*Define the events for your widget*/
	wakandaratings.addEvent({
        'name': 'rate',
        'description': 'On Rate',
        'category': 'Mouse Events'
    });
    
	wakandaratings.addEvent({
        'name': 'reset',
        'description': 'On Reset Rate',
        'category': 'Mouse Events'
    });

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
