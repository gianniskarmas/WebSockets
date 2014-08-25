WAF.define('wakandaratings', function() {
    var widget = WAF.require('waf-core/widget');
    var wakandaratings = widget.create('wakandaratings');
	
	wakandaratings.addProperty('value', { defaultValue : 2,  type : "number"});
    
	wakandaratings.prototype.init = function () { 
	
	     var that = this,
            $htmlElement, max;
		
		
		 $('#' + this.id).bind('rated', function(event) {
		 	that.value($rateIt.rateit('value'));
		 	that._bindedAttributes.value.datasource.save();
            
            wakandaratings.autoFireDomEvent('rate', Event.rate);
            
        });
       
        $('#' + this.id).bind('reset', function(event) {
        	that.value(0);
		 	that._bindedAttributes.value.datasource.save();
            
             wakandaratings.autoFireDomEvent('reset', Event.reset);
        });
		
        $htmlElement = $("#" + this.id);
        max = this.options.max || 5;
        $htmlElement.html('<span class="rateit"> </span>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
        $rateIt.rateit('max', max);

        
        if (this.options.value) {
			$rateIt.rateit('value', this.options.value);
        }
        
        
        this.value.onChange(function (myValue) {
			$rateIt.rateit('value', myValue);
		});
	};
	// wakandaratings.makeBindableProperty('value',this.value, Event.rate);
	 
    return wakandaratings;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
