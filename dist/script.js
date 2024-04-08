var counts = 0;

function updateCounts() {
    counts += 1;
    document.getElementById('counts').innerHTML = counts;
    return;    
}

function closePopUp() {
    counts = 0;
    document.getElementById('counts').innerHTML = counts;
    
    document.getElementById('popupss').style.display = "none";
    document.getElementById('P3').innerHTML = '';
    document.getElementById('startGame').style.display = "flex";
}

function checking() {
    const p1List = document.querySelectorAll('#P1 li');
    const p2List = document.querySelectorAll('#P2 li');
    const p3List = document.querySelectorAll('#P3 li');

    const showThePopUp = document.getElementById('popupss');

    if (p1List.length === 0 && p2List.length === 0 && p3List.length !== 0) {
        showThePopUp.style.display = "flex";
        document.getElementById('gamePlayZone').style.display = "none";
        document.getElementById('counter').style.display = "none";

        // document.getElementById('P3').innerHTML = '';
    }
}

function playAgain() {
    counts = 0;
    document.getElementById('counts').innerHTML = counts;
    document.getElementById('openingPopUp').style.display = "block";
    document.getElementById('popupss').style.display = "none";
}


function createNumOfDisk(numOfDisk) {
    let container = document.getElementById("P1");
    const baseWidth = 50;
    const widthIncrement = 20;

    for(i = 0; i < numOfDisk; i++){
        let listItems = document.createElement("li");
        const width = baseWidth + i * widthIncrement;
        listItems.style.width = `${width}px`;
        listItems.textContent = i + 1;
        listItems.id = i + 1;
        container.appendChild(listItems);

        document.getElementById('openingPopUp').style.display = "none";
        document.getElementById('chooseTheDisk').style.display = "none";
        document.getElementById('gamePlayZone').style.display = "block";
        document.getElementById('counter').style.display = "flex";
        document.getElementById('P2').innerHTML = "";
        document.getElementById('P3').innerHTML = "";

    } 
    // console.log("Creating the disk "); 
}

function chooseTheNumOfDisk(create) {
    let a = 3;
    let b = 5;
    let c = document.getElementById('numInput').value;

    switch (create) {
        case 'forBegineer':
            createNumOfDisk(a);            
            break;
        case 'forIntermediate':
            createNumOfDisk(b);
            break;
        case 'forAdvance':
            createNumOfDisk(c);
            break;
        default:
            alert("Invalid action");
            break;
    }
    createNumOfDisk();
}

function optionChoosePopUp(screenPopUp) {
    const screen = document.getElementById('chooseTheDisk');
    document.getElementById('chooseTheDisk').style.display = "flex";
    document.getElementById('openingPopUp').style.display = "none";
    
    switch (screenPopUp) {
        case 'diskCreate':
            screen.style.display = "block";
            break;
        case 'cancel':
            screen.style.display = "none";
            document.getElementById('openingPopUp').style.display = "block";
            break;
        default:
            alert("Invalid action");
            break;
    }
}

function backButton(){
    counts = 0;
    document.getElementById('counts').innerHTML = counts;

    const back = document.getElementById('openingPopUp');
    back.style.display = "block";
    document.getElementById('P1').innerHTML = "";
    document.getElementById('P2').innerHTML = "";
    document.getElementById('P3').innerHTML = "";
    document.getElementById('numInput').value = "";
    document.getElementById('gamePlayZone').style.display = "none";
    document.getElementById('counter').style.display = "none";
    return;
    
}

function startTheGame() {
    counts = 0;
    document.getElementById('counts').innerHTML = counts;
    document.getElementById('openingPopUp').style.display = "block";
    document.getElementById('startGame').style.display = "none";
}

// function movingBlocks(action) {

//         const p1ListItems = document.querySelectorAll("#P1 li");
//         const p2ListItems = document.querySelectorAll("#P2 li");
//         const p3ListItems = document.querySelectorAll("#P3 li");
        
//         const p1TopEle = p1ListItems[0];
//         const p2TopEle = p2ListItems[0];
//         const p3TopEle = p3ListItems[0];
    
//         let fromContainerList;
//         let toContainer;
//         let fromContainerTopEle;
//         let toContainerTopEle;
     
//         switch (action) {
//             case 'p1ToP2':
//                 fromContainerList = p1ListItems;
//                 toContainer = document.getElementById('P2');
//                 fromContainerTopEle = p1TopEle;
//                 toContainerTopEle = p2TopEle;        
//                 break;
    
//             case 'p2ToP1':
//                 fromContainerList = p2ListItems;
//                 toContainer = document.getElementById('P1');
//                 fromContainerTopEle = p2TopEle;
//                 toContainerTopEle = p1TopEle;
//                 break;
    
//             case 'p2ToP3':
//                 fromContainerList = p2ListItems;
//                 toContainer = document.getElementById('P3');
//                 fromContainerTopEle = p2TopEle;
//                 toContainerTopEle = p3TopEle;
//                 break;
    
//             case 'p3ToP2':
//                 fromContainerList = p3ListItems;
//                 toContainer = document.getElementById('P2');
//                 fromContainerTopEle = p3TopEle;
//                 toContainerTopEle = p2TopEle;
//                 break;
    
//             case 'p1ToP3':      
//                 fromContainerList = p1ListItems;
//                 toContainer = document.getElementById('P3');
//                 fromContainerTopEle = p1TopEle;
//                 toContainerTopEle = p3TopEle;
//                 break;
    
//             case 'p3ToP1':
//                 fromContainerList = p3ListItems;
//                 toContainer = document.getElementById('P1');
//                 fromContainerTopEle = p3TopEle;
//                 toContainerTopEle = p1TopEle;
//                 break;
    
//             default:
//                 alert("Invalid action");
//                 break;
//         }
    
//         updateContainers(fromContainerList, toContainer, fromContainerTopEle, toContainerTopEle);
//     };
    
    
//     function updateContainers(fromContainerList, toContainer, fromContainerTopEle, toContainerTopEle) {
    
//         if (!fromContainerList.length) {
//             alert("From Container is Empty");
//             return;
//         }
//         if (!toContainerTopEle || fromContainerTopEle.id < toContainerTopEle.id) {
//             toContainer.prepend(fromContainerTopEle);
//             updateCounts();
    
//             if (toContainer.id === "P3") {
//                 checking();
//             } 
    
//         } else if (fromContainerTopEle.id > toContainerTopEle.id) {
//             alert('Cannot move');
            
//         }
//     }



let topEleSelected;
let targetContainer;
const mainContainer = document.getElementById('main');


mainContainer.addEventListener('keydown', function (event) {
    if (mainContainer && event.key === 'Enter') {
        
        if (!topEleSelected) {
            const targetPoint = document.activeElement;
            topEleSelected = targetPoint.querySelector('li');
            topEleSelected.classList.add('selected');
        } else if (topEleSelected) {
            let targetDisk = document.activeElement;
            let targetContainerTopEle = targetDisk.querySelector('li');
            targetContainer = targetDisk.querySelector('ul');

            if(!targetContainerTopEle || (topEleSelected.id < targetContainerTopEle.id)) {
                targetContainer.prepend(topEleSelected);
                updateCounts();
                checking();
            }

            topEleSelected.classList.remove('selected');
            topEleSelected = undefined;
            targetContainer = undefined;
        }
    }

});