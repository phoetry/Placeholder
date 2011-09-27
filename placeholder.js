/**
  * HTML5 Placeholder jQuery Plugin v1.0
  * For enabling the html5 attribute 'placeholder' on form elements.
  * When adding code dynamically, run sth. like this:
  * $node.find('[placeholder]').placeholder();
  * Or just this:
  * $('[placeholder]').placeholder();
  * @Author: Phoetry (http://phoetry.me)
  * @Url: http://phoetry.me/archives/jquery-placeholder.html
  **/
~function($){
	$.fn.placeholder=function(){
		return this.each(function(){
			var n=1,t=this,txt=t.getAttribute('placeholder');
			if('placeholder'in document.createElement(t.tagName))return;
			t.value&&t.value!=txt||(n=0,t.value=txt);
			$(t).bind({
				focus:function(){
					n||(n=1,t.value='');
				},
				blur:function(){
					t.value?n=1:(n=0,t.value=txt);
				}
			});
			t.form&&$(t.form).submit(function(){
				n||(t.value='');
			});
		});
	};
}(jQuery);