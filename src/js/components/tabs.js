const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const buttons = document.getElementsByClassName('tabs__btn')
const tabPanels = document.getElementsByClassName('tab__panel')

function openTab1() {
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.remove('tab-active');
        tabPanels[0].classList.add('tab-active');
        buttons[i].classList.remove('active');
        buttons[0].classList.add('active');
    }
}

function openTab2() {
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.remove('tab-active');
        tabPanels[1].classList.add('tab-active');
        buttons[i].classList.remove('active');
        buttons[1].classList.add('active');
    }
}

function openTab3() {
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.remove('tab-active');
        tabPanels[2].classList.add('tab-active');
        buttons[i].classList.remove('active');
        buttons[2].classList.add('active');
    }
}

if (buttons.length) {
    btn1.addEventListener('click', openTab1);
    btn2.addEventListener('click', openTab2);
    btn3.addEventListener('click', openTab3);
}


//
// const tabs = document.querySelectorAll('[data-tabs]');
//
// function removeClassFromNodeList(list, className) {
//     list.forEach(list => list.classList.remove(className))
// }
//
// if (tabs.length) {
//
//     for (let i = 0; i < tabs.length; i++) {
//
//         const trigger = tabs[i].querySelectorAll('.trigger');
//         const content = tabs[i].querySelectorAll('.content');
//
//
//         for (let j = 0; j < trigger.length; j++) {
//
//             trigger[j].addEventListener('click', () => {
//                 removeClassFromNodeList(trigger, 'active');
//                 removeClassFromNodeList(content, 'active');
//
//                 trigger[j].classList.add('active');
//                 content[j].classList.add('active');
//             })
//
//         }
//
//     }
//
// }