/*smokey*/

$(function() {
    console.log("$function in");
	$(window).resize(Resize);
//	
	function Resize() {
		$("#bg1").height($(window).height(''));
		$("#bg5").height($(window).height());
		$("#bg2").height($(window).height() / 1);
		$("#bg3").height($(window).height() / 1);
		$("#bg4").height($(window).height() / 1);
	}
	
	Resize();
	
	$.fn.vcSmokeyBackground = function(Options, Callback) {
        console.log("$function in 2");
        var CreateElement = $(this);
        var ElementId = CreateElement.attr("id");
        var parentRow = getParentRow(CreateElement);
        parentRow.css("position", "relative");
        var Element = parentRow.prepend('<div id="' + ElementId + '" style="background-color:' + (CreateElement.attr("data-bgcolor") ? CreateElement.attr("data-bgcolor") : '#000000') + '" class="vc-smokeybackground-background-bg"><canvas id="' + ElementId +  '-output"></canvas></div>');

		$("#" + ElementId + "-output").css("opacity",CreateElement.attr("data-opacity") ? CreateElement.attr("data-opacity") : '0.8')
		$("#" + ElementId + "-output").colorSmoke({
		fixedColor: (CreateElement.attr("data-fixedcolor") == "true"),
		colorHue: parseInt(CreateElement.attr("data-colorhue") ? CreateElement.attr("data-colorhue") : '100'),
		maxHueDifference: parseInt(CreateElement.attr("data-maxhuediff") ? CreateElement.attr("data-maxhuediff") : '50')});
		
        CreateElement.remove();
        
        console.log("$function end");   ``

        function getParentRow(Element) {
            console.log("get parent row");
            return Element.parent().eq(0);
        }
    }


    $(".vc-smokeybackground-background").each(function() {
        $(this).vcSmokeyBackground();
        console.log("$.vc-smokey....");
    });



});