function val(){
        let name=document.getElementById("name").value;
        let age=document.getElementById("age").value;
        let email=document.getElementById("email").value;
        var vaildEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passw=document.getElementById("passw").value;
        let confirmpass=document.getElementById("confirmpass").value;
        let course =document.getElementById("course").value;
        let gender=document.getElementById("gender").value;
        if(name==""){
            alert("enter a name");
            return false;
        }
        if(age=="" || age<=0){
            alert("enter a vaild age");
            return false;
        }
        if(email=="" || !vaildEmailPattern.test(email)){
            alert("enter a vaild email");
            return false;
        }
        if(passw==""||passw.length<8){
            alert("enter a vaild password");
            return false;
        }
        if(confirmpass!=passw || confirmpass.length<8){
            alert("Password doesn't match");
            return false;
        }
        if(course=="None"){
            alert("Select a course");
            return false;
        }
        if(gender!=select){
            alert("Select a gender");
            return false;
        }return true;
}
