// let all_button = document.querySelectorAll("button")
// // console.log(all_button[0])

// let first_conatiner_list = document.querySelectorAll(".first-list div")
// // console.log(first_conatiner_list[0].children)
// // console.log(first_conatiner_list)
// let second_container_list = document.querySelectorAll(".second-list div")
// let allcheckbox = document.querySelectorAll("checkbox")
// // console.log(second_container_list)




// let first_conatiner_all_lable = document.querySelectorAll(".first-list label")
// let second_container_all_checkbox = document.querySelectorAll(".second-list input[type='checkbox']");
// let second_conatiner_all_lable = document.querySelectorAll(".second-list label")


// all_button[0].addEventListener("click", (e) => {
//     // while (second_container_list[0].children.length > 0) {
//     //     first_conatiner_list[0].appendChild(second_container_list[0].children[0]);
//     // }
//     second_container_list.forEach((alldivs) => {
//         first_conatiner_list[0].appendChild(alldivs)
//         // console.log(alldivs)
//     })

// })
// all_button[3].addEventListener("click", (e) => {
//     first_conatiner_list.forEach((alldivs) => {
//         second_container_list[0].appendChild(alldivs)
//         // console.log(alldivs)
//     })
// })

// // function movedcheckbox() {
// //     const checkedInputs = document.querySelectorAll('.first-list input[type="checkbox"]:checked');
// //     // Do something with the checked inputs
// //     checkedInputs.forEach(input => {
// //       console.log(input.value); // Or any other action you want to perform
// //     });
// //   }



// // second_conatiner_all_lable.forEach((items)=>{
// //         console.log(items)
// //         items.addEventListener("click",(e)=>{
// //             // let checked_checkbox = e.target.id
// //             if (e.target.id) {
// //                 // Move the checked item to the first container
// //                 first_conatiner_list[0].appendChild(items.parentElement);
// //             }
// //         })


// //     })

// second_conatiner_all_lable.forEach((item) => {
//     console.log(item);
//     item.addEventListener("click", (e) => {
//         // Check if the clicked item has an ID
//         if (e.target.id) {
//             // Move the parent element of the clicked label to the first container
//             first_conatiner_list[0].appendChild(item.parentElement);
//         }
//     });
// });





    
let all_button = document.querySelectorAll("button");
let first_container_list = document.querySelectorAll(".first-list div");
let second_container_list = document.querySelectorAll(".second-list div");
let second_container_all_checkbox = document.querySelectorAll(".second-list input[type='checkbox']");
let second_container_all_label = document.querySelectorAll(".second-list label");

// Move checked items from the second container to the first container
all_button[0].addEventListener("click", (e) => {
    second_container_all_checkbox.forEach((checkbox) => {
        if (checkbox.checked) {
            // Move the parent label (or div) of the checked checkbox
            first_container_list[0].appendChild(checkbox.parentElement);
        }
    });
});

// Move all items from the first container back to the second container
all_button[3].addEventListener("click", (e) => {
    first_container_list[0].children.forEach((alldivs) => {
        second_container_list[0].appendChild(alldivs);
    });
});

// Move labels of second container when clicked (if needed)
second_container_all_label.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.id) {
            // Move the parent element of the clicked label to the first container
            first_container_list[0].appendChild(item.parentElement);
        }
    });
});
