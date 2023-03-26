let input = document.getElementById("input");
        let btn = document.getElementById("btn");
        let list = document.getElementById("list");
        let arr = [];
        btn.addEventListener("click", function(){
            let li = document.createElement("li");
            li.innerHTML = input.value;
            let btn = document.createElement("button");
            btn.innerHTML = "Delete";
            li.appendChild(btn);
            list.appendChild(li);
            arr.push(li);
            input.value = "";
            btn.addEventListener("click", function(){
                li.remove();
                arr.splice(arr.indexOf(li), 1);
            })
            li.addEventListener("click", function(){
                
                if(li.style.textDecoration == "line-through"){
                    li.style.textDecoration = "none";
                }else{
                    li.style.textDecoration = "line-through";
                }

            }
            )



        })

