function Hide (addr) { document.getElementById(addr).style.visibility = "hidden";	}
function Show (addr) { document.getElementById(addr).style.visibility = "visible";	}


function toggle(anId)
{
	if (document.getElementById(anId).style.visibility == "hidden")	{	
        document.getElementById("main-profile-candidate").classList.remove('main-profile-candidate');
        document.getElementById("main-profile-candidate").classList.add('main-profile-candidate-visible');
        Show(anId);	
        
    }
    else {	
        document.getElementById("main-profile-candidate").classList.add('main-profile-candidate');
        Hide(anId);	
    }
}

window.onload = function () { 
    Hide("view-form");
};