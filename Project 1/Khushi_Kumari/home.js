document.addEventListener("DOMContentLoaded",() =>{
    document.querySelector("#nav-home").addEventListener("click",() =>{
        document.querySelector("#home").scrollIntoView({behavior: "smooth"});
    })

    document.querySelector("#nav-about").addEventListener("click",() =>{
        document.querySelector("#about").scrollIntoView({behavior: "smooth"});
    })

    document.querySelector("#nav-skills").addEventListener("click",() =>{
        document.querySelector("#skills").scrollIntoView({behavior: "smooth"});
    })

    document.querySelector("#nav-projects").addEventListener("click",() =>{
        document.querySelector("#projects").scrollIntoView({behavior: "smooth"});
    })

    document.querySelector("#nav-CFstats").addEventListener("click",() =>{
        document.querySelector("#cf").scrollIntoView({behavior: "smooth"});
    })

    document.querySelector("#back-btn3").addEventListener("click",() =>{
        document.querySelector("#home").scrollIntoView({behavior: "smooth"});
    })
    document.querySelector("#back-btn4").addEventListener("click",() =>{
        document.querySelector("#home").scrollIntoView({behavior: "smooth"});
    })

    let p1=document.querySelector("#proj-img1");
    let p2=document.querySelector("#proj-img2");
    
    function click(p1,p2,g1,c1){
        p1.addEventListener("click",() =>{
            if(p2.style.display=="block" || p2.style.display==""){
                p2.classList.add("fade-out");
                // p2.style.display="none";
                setTimeout(() =>{
                    p2.style.display="none";
                    document.querySelector("#gitId"+g1).style.display="block";
                }, 300 );
                document.querySelector("#project-Info"+c1).style.display="none";
            }
    
            else{
                p2.classList.remove("fade-out");
                setTimeout(() =>{p2.style.display="block";});
                document.querySelector("#gitId"+g1).style.display="none";
                document.querySelector("#project-Info"+c1).style.display="block";
            }
        })
    }
    click(p1,p2,"1","2");
    click(p2,p1,"2","1");

    p1.addEventListener("mouseover",() =>{
        document.querySelector("#project-Info1").classList.add("hover");
        document.querySelector("#project-Info1").classList.remove("nohover");
    })
    p1.addEventListener("mouseout",() =>{
        document.querySelector("#project-Info1").classList.remove("hover");
        document.querySelector("#project-Info1").classList.add("nohover");
    })
    p2.addEventListener("mouseover",() =>{
        document.querySelector("#project-Info2").classList.add("hover");
        document.querySelector("#project-Info2").classList.remove("nohover");
    })
    p2.addEventListener("mouseout",() =>{
        document.querySelector("#project-Info2").classList.remove("hover");
        document.querySelector("#project-Info2").classList.add("nohover");
    })


    document.querySelector("#CF-form-btn").addEventListener("click", event => {
        event.preventDefault();
        let id= document.querySelector("#cfID").value;
        fetch('https://codeforces.com/api/user.info?handles='+id)
        .then((response) => response.json())
        .then((data) => {document.querySelector("#codeforces-rating").innerHTML=data.result[0].rating;
        document.querySelector("#codeforces-rank").innerHTML=data.result[0].rank;
        document.querySelector("#codeforces-handle").innerHTML=data.result[0].handle;
        document.querySelector("#codeforces-name").innerHTML=data.result[0].firstName+" "+data.result[0].lastName;}
    )
        // fetch('https://codeforces.com/api/user.info?handles=WannaBeChicken')
        //   .then((response) => response.json())
        //   .then((data) => {document.querySelector("#cf").innerHTML+=data.result[0].handle;
        // console.log(data.result[0])});
    })

    // let dark = document.querySelector(".nav-btn-dark");
    // dark.addEventListener("click",toggle_mode);
    // function toggle_mode(){
    //     if(document.querySelector(".nav-btn-dark").innerHTML=="Dark")
    //     {
    //         document.querySelector(".nav-btn-dark").innerHTML="Light";
    //         document.querySelectorAll(".cards_display").forEach((element)=>{
    //             element.classList.replace("Light","Dark");
    //         })
    //         document.querySelector("#nav_bar").classList.replace("Dark","Light");
 
    //     }
    //     else
    //     {
    //         document.querySelector(".nav-btn-dark").innerHTML="Dark";
    //         document.querySelectorAll(".cards_display").forEach((element)=>{
    //             element.classList.replace("Dark","Light");
    //         })
    //         // document.querySelector("#toggle_skills").classList.replace("Dark","Light");
    //         // document.querySelector("#toggle_projects").classList.replace("Dark","Light");
    //         // document.querySelector("#toggle_cf").classList.replace("Dark","Light");
    //         // document.querySelector("#toggle_about").classList.replace("Dark","Light");
    //         // document.querySelector("#toggle_home").classList.replace("Dark","Light");
    //         document.querySelector("#nav_bar").classList.replace("Light","Dark");
    //     }
    //     }
})
