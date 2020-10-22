function bugg(e) {
    var bid = document.getElementById("ibug").value;
    if(isNaN(bid)){
        var base=""; //Base Query URL
        var res=bid.split(" ");
        var base2="SELECT [System.Id], [System.WorkItemType], [System.Title], [System.State] FROM workitems WHERE [System.Tags] CONTAINS ''"; //Base Query
        var urll=base+encodeURI(base2);
        var i;
        for(i=0;i<res.length;i++){
            urll+=" AND [System.Title] CONTAINS "+"'"+encodeURI(res[i])+"' ";
        }
       
    }
    else{
        var urll=""+bid; //ID URL
    }
    
    chrome.tabs.create({url: urll});
    window.close();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bbug').addEventListener('click', bugg);
});
function appp(e) {
    
    var apid = document.getElementById("iapp").value;
    if(isNaN(apid)){
        var urll=""+apid+""; //Search URL
    }
    else{
        var urll=""+apid; //Search URL
    }
    
    chrome.tabs.create({url: urll});
    window.close();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bapp').addEventListener('click', appp);
});

function cl(e) {
    var clid = document.getElementById("icl").value;
    var urll=""+clid; //CORA URl
    chrome.tabs.create({url: urll});
    window.close();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bcl').addEventListener('click', cl);
});
function cr(e) {
    var urll=""; //Compat Reports URL
    chrome.tabs.create({url: urll});
    window.close();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bcr').addEventListener('click', cr);
});
function dq(e) {
    var apid = document.getElementById("iapp").value;
    var urll=""+apid; //Search URl
    chrome.tabs.create({url: urll});
    window.close();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dq').addEventListener('click', dq);
});