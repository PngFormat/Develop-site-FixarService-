function show(state)
	{
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;


	};
	function showLog(state)
	{
	document.getElementById('windows').style.display = state;
	document.getElementById('grayRegis').style.display = state;


	};
    /*scrolling up */
	 var timeOut;
     function goUp() {
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
       window.scrollBy(0,-100);
       timeOut = setTimeout('goUp()',20);
        } else clearTimeout(timeOut);
     }
     /*scrolling up */
     