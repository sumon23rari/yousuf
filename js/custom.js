function blogPage() {
    location.href='http://127.0.0.1:5500/faq.html';
}

// loadcatagory

function loadcatagory() {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res=>res.json())
    .then(data=>displayCatagory(data.data))
}
function displayCatagory(catagorys) {
    const categoriesContainer=document.getElementById('catagoryContainer');
    catagorys.forEach((catagory)=>{
        const div=document.createElement('div');
        div.classList="flex justify-center";
        div.innerHTML=`<button onclick="showCatagory('${catagory.category_id}')" class="p-[10px_20px] bg-[#ddd] text-xl mr-[10px]">${catagory.category} 
        </button>`;
    categoriesContainer.appendChild(div)
    })
}
loadcatagory()

function showCatagory(id) {
  
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res=>res.json())
    .then(data=>catagoryDetails(data.data))
    
}

function catagoryDetails(items) {
    const catagoryContainer=document.getElementById('caItems-container');
    if (items.length>0) {
        document.ge
        items.map((item)=>{
            console.log(item)
            const itemsCard = document.createElement('div');
            const verified=item.authors[0].verified;
            const time=parseInt(item.others?.posted_date);
            console.log(time)
           // const showTime= isNaN(time)?'oh googd':'thats fine';
    
            //console.log(timeIn)
            itemsCard.classList = `card p-4 shadow-xl`;
            const verifiedElement= verified===true ? `<span class="ml-[15px] p-[5px]  text-white bg-[#687EFF] rounded-full"><i class="fa-solid fa-check"></i></span>`:'';
            const seconds=time;
            const hours=Math.floor(seconds/3600);
            const minutes=Math.ceil((seconds % 3600) / 60);
            const showTime=isNaN(time)?'': `<h2 class="absolute bg-[#000] text-white right-[25px] top-[35%] p-[3px_6px]">${hours}hours and ${minutes} minutes ago </h2>`;
            console.log(hours,minutes)
            // 3: set inner html 
            itemsCard.innerHTML = `
            <div>
            <figure class="h-[200px] relative"><img src="${item.thumbnail}" alt="Shoes" /></figure>
            ${showTime} 
            </div>
            <div class="card-body p-2 grid grid-cols-4 gap-3">
           <img class="w-[30px] h-[30px] rounded-full" src="${item.authors[0].profile_picture}" alt="">
             <div class="col-span-3">
             <h2 class="card-title">${item.title}</h2>
             <p class="mt-2"> <span>${item.authors[0].profile_name}</span> 
        <span>${verifiedElement} </span>
             </p>
         <p>${item.others?.views}</p>
      
             </div>
            </div>
            `;
          
         //   4 append child
            catagoryContainer.appendChild(itemsCard);
        })  
    } else {
        const itemsCard = document.createElement('div');
        div.innerHTML=`
        <img class="block" src="images/Icon.png"/>
        <h2>no data found.please try again</h2>
        `;
        catagoryContainer.appendChild(itemsCard)
    }
  
}

// function decending(elements) {
    
// }