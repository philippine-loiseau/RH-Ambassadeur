function Hide (addr) { document.getElementById(addr).style.visibility = "hidden";	}
function Show (addr) { document.getElementById(addr).style.visibility = "visible";	}

function toggle(anId)
{
	if (document.getElementById(anId).style.visibility == "hidden")	{	
        Show(anId);	
        
    }
    else {	
        Hide(anId);	
        document.getElementsByClassName("ask-question").style.background == "white";
    }
}

window.onload = function () { 
    Hide("view-form");	
    document.getElementsByClassName("ask-question").style.background == "white";
};