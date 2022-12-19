document.getElementById("usericon1").addEventListener("click",userpopdown);

    var content = document.getElementById("content");
    function userpopdown(event) {
        event.preventDefault();
        console.log("here")
        document.getElementById("content").style.border="1px solid rgb(199, 196, 196) "
        document.getElementById("content").style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"

        var myaccount=document.createElement("p");
        myaccount.textContent="My Account";
        myaccount.addEventListener("click",function(){
            window.location.href = "mainPageUser.html";
        });

        var trackorder = document.createElement("p");
        trackorder.textContent="Track Orders"

        var collections= document.createElement("p");
        collections.textContent="Collections"
        collections.addEventListener("click",function(){
            window.location.href = "collections_Page.html";
        });

        var get=document.createElement("p");
        get.textContent="Get € 1,000"

        var signout= document.createElement("p");
        signout.textContent="Sign Out"
        signout.addEventListener("click",function(){
            if (confirm("Are you sure you wish to continue?")) {
  
                console.log('Thing was saved to the database.');
            } else {
  
                 console.log('Thing was not saved to the database.');
            }
            window.location.href = "mainPage.html";
        });

        content.append(myaccount,trackorder,collections,get,signout)
        document.getElementById("usericon1").removeEventListener("click",userpopdown);
    }