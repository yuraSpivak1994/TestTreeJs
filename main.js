const box = [];
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const span4 = document.createElement("span");
const span5 = document.createElement("span");
const span6 = document.createElement("span");
const span7 = document.createElement("span");

const treeModel = {

    parrent: {
        user: {parrent: ''},

        second: {
            user: {parrent: ''},
        },
        third: {
            user: {parrent: ''},
        },
        fourth: {
            user: {parrent1: '', parrent2: '', parrent3: ''},
        },
        five: {parrent: ''}
    }
};

window.TreeAPI.getData()
    .then((users) => {
        users.data.forEach((i) => {
            box.push(i);
        });

        generateTree(transformParentsValue(box));
    });

generateTree = function (data) {
    treeModel.parrent.user.parrent = data[0];
    treeModel.parrent.second.parrent = data[1];
    treeModel.parrent.third.parrent = data[2];
    treeModel.parrent.fourth.user.parrent1 = data[3];
    treeModel.parrent.fourth.user.parrent2 = data[4];
    treeModel.parrent.fourth.user.parrent3 = data[5];
    treeModel.parrent.five.parrent = data[6];
    span1.innerText = treeModel.parrent.user.parrent;
    span2.innerText = treeModel.parrent.second.parrent;
    span3.innerText = treeModel.parrent.third.parrent;
    span4.innerText = treeModel.parrent.fourth.user.parrent1;
    span5.innerText = treeModel.parrent.fourth.user.parrent2;
    span6.innerText = treeModel.parrent.fourth.user.parrent3;
    span7.innerText = treeModel.parrent.five.parrent;
    box1.appendChild(span1);
    box2.appendChild(span2);
    box3.appendChild(span3);
    box4.appendChild(span4);
    box5.appendChild(span5);
    box6.appendChild(span6);
    box7.appendChild(span7);
};

transformParentsValue = function (data) {
    const parrents = [];
    const latestParrent = [];

    let counter = 0;
    data.forEach((item) => {
        parrents.push(item.parent);
    });
    const parrentsNumber = parrents.join(',').split(',').map(Number);
    parrentsNumber.map(() => {
        counter++;
        latestParrent.push(counter)
    });
    return latestParrent
};
