

        //dark mode

let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle')

const enableDarkMode = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode' , 'enabled')
}
const disableDarkMode = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode' , null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
                                        darkModeToggle.setAttribute('checked', true);

}
darkModeToggle.addEventListener('click', () => {
            // console.log('hello')
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
                                    darkModeToggle.setAttribute('checked', true);

        enableDarkMode()

        console.log('dark')
    } else {
                                    darkModeToggle.setAttribute('checked', true);

        disableDarkMode()
        
        console.log('disable')
    }
})



        function printDiv(divName){
			var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;
            window.print();

			document.body.innerHTML = originalContents;

		}
// function printEle() {
//     let hideEle = document.getElementById('title-hide')
//     let headerHide = document.getElementById('header-hide')
//     // let idx = document.getElementById('indx')
//     // exampleModalshowcontract = document.getElementById('exampleModalshowcontract')
//         // idx.style.visibility = 'hidden'

//     // exampleModalshowcontract.style.visibility = 'visible'
//     hideEle.style.visibility = 'hidden'
//         headerHide.style.display = 'none'

// window.print()
// }
// const activesidebar = document.querySelectorAll(".li-side");

// activesidebar.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     activesidebar.forEach(f => f.classList.remove('active'));
//     e.target.classList.toggle("active");
//   });
// });

// var header = document.getElementsByClassName("sidebar");
// var btns = header.getElementsByClassName("li-side");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";

//   });
// }
function myFunction() {
            let x = document.getElementById("myDIV");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
}

function hidetab() {
    document.getElementById("assetmanage").style.display = "none";
    document.getElementById("assetsmanagetable").style.display = "none";
    document.getElementById("assetsmanagetabletwos").style.display = "block";
    document.getElementById("assetmanagetwo").style.display = "block";


    
}
function hidetabtwo() {
    document.getElementById("assetmanage").style.display = "block";
    document.getElementById("assetsmanagetable").style.display = "block";
    document.getElementById("assetsmanagetabletwos").style.display = "none";
    document.getElementById("assetmanagetwo").style.display = "none";


    
}
function changeImageRed() {
      
let users = document.querySelectorAll('.shape-home')
    users.forEach(function(user) {
                   user.src = "assets/img/svgexport-7 (90) 4 (1).png";

    })
}
function changeImageGreen() {
      
let users = document.querySelectorAll('.shape-home')
    users.forEach(function(user) {
                   user.src = "assets/img/svgexport-7 (90) 4.png";

    })
}
function changeImageGray() {
      
let users = document.querySelectorAll('.shape-home')
    users.forEach(function(user) {
                   user.src = "assets/img/svgexport-7 (90) 1 (5).png";

    })
}
function changeImageBlue() {
      
let users = document.querySelectorAll('.shape-home')
    users.forEach(function(user) {
                   user.src = "assets/img/Group (29).png";

    })
}
function changeImagePurple() {
      
let users = document.querySelectorAll('.shape-home')
    users.forEach(function(user) {
                   user.src = "assets/img/svgexport-7 (90) 1 (6).png";

    })
}
// function changeImage() {
      
//             let image = document.querySelector(".myImage");

//               image.src = "assets/img/svgexport-7 (90) 4 (1).png";
           
//         }
   // butoon toggle
           const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");

        callToActionBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                callToActionBtns.forEach(f => f != e.target ? f.classList.remove('active') : '');
                e.target.classList.toggle("active");
            });
        });   


      
    // setup
        const dataOne = {
            labels: ['الخميس', 'الأربعاء', 'الثلاثاء', 'الاثنين', 'الأحد', 'السبت'],

            datasets: [{
                label: 'شاغر',
                type: 'bar',
                data: [100, 150, 200, 75, 100, 150],

                backgroundColor: [
                    '#2D9CDB',
                    '#2D9CDB',
                    '#2D9CDB',
                    '#2D9CDB',
                    '#2D9CDB',
                    '#2D9CDB',

                ],


            },
            {
                label: ' محجوز ',
                type: 'bar',
                data: [20, 0, 0, 0, 0, 13, 0],
                backgroundColor: [
                    '#F94144',
                    '#F94144',
                    '#F94144',
                    '#F94144',
                    '#F94144',
                    '#F94144',

                ],


            },
            {
                label: ' ملغي ',
                type: 'bar',
                data: [],
                backgroundColor: [
                    '#A3A99E',
                    '#A3A99E',
                    '#A3A99E',
                    '#A3A99E',
                    '#A3A99E',
                    '#A3A99E',
                    '#A3A99E',
                ],


            },
                // {

                //     type: 'line',
                //     data: [170, 130, 120, 180, 150, 100],
                //     // backgroundColor: [
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     //     '#A3A99E',
                //     // ],


                // },
            ]
        };

        // config 
        const config = {
            type: 'bar',
            data: dataOne,
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            boxWidth: 10,
                     
                        }
                    },
                },
                scales: {
                    x: {
                        stacked: true,

                    },
                    y: {
                        title: {
                            display: true,
                            text: 'حالة الغرف الاسبوعية'
                        },
                        stacked: true,

                        min: 0,
                        max: 200,

                        ticks: {
                            // forces step size to be 50 units
                            stepSize: 10
                        }

                    }
                }

            }
        };
        // render init block
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

        // setup 
        const data = {
            // labels: ['غير نظيف', 'نظيف'],
            datasets: [{

                data: [65, 20, 20],
                backgroundColor: [
                    '#6979F8',
                    '#953BBF',
                    '#CDD2FD'

                ],

                borderWidth: 1,
                cutout: '70%',
                // borderRadius: 20,
            }]
        };
        //configTwo
        const configTwo = {
            type: 'doughnut',
            data: data,
            options: {
                plugins: {
                    lengend: {
                        position: 'right',
                        align: 'end'
                    }
                }


            }

        };

        const myChartTwo = new Chart(
            document.getElementById('myChartTwo'),
            configTwo
        );
        //setup
        const dataThree = {

            datasets: [{
                data: [65, 20, 15],
                backgroundColor: [
                    '#6979F8',
                    '#F765A3',
                    '#16BFD6'

                ],

                borderWidth: 1,
                cutout: '0%',
            }]
        };
        const configThree = {
            type: 'doughnut',
            data: dataThree,
            options: {

            }
        };
        const myChartThree = new Chart(
            document.getElementById('myChartThree'),
            configThree
        );



      
