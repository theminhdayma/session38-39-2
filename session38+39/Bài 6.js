
let btn=document.querySelectorAll("button");
let increase = 0;
let count = 0;
let lit = 2;
btn.forEach(item => {
    item.addEventListener("click", function(){
        if (item.classList.contains("actived")) {
            return;
        }
        item.style.backgroundColor="white";
        increase += 200/8;
        let bigWater = document.getElementsByName("big-water");
        let water = document.getElementById("water");          
        water.style.height = `${increase}px`;
        item.classList.add("actived");
        let percent = document.getElementById("percent");
        count += 100/8;
        percent.innerHTML = `${count}%`;
        let reduce = document.getElementById("reduce");
        lit -= 2/8;
        reduce.innerHTML = `${lit} L`;
    })
});
