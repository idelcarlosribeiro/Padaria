var header = document.getElementById('mob');
var navigationHeader = document.getElementById ('btn-ico');
var content = document.getElementById ('cont');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if (showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = "showSidebar";
        content.style.filter = 'blur(2px)';
    }
    else
    {
        navigationHeader.style.marginLeft = "-100vw";
        navigationHeader.style.animationName = "";
        content.style.filter = "";
    }
}

function closerSiderbar() 
{
    if (showSidebar) 
    {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});