function increaseMoneyToWithdraw(money) {
    total_withdraw = Number(document.getElementById('total_withdraw').innerHTML);
    document.getElementById('total_withdraw').innerHTML = total_withdraw + Number(money);
}
function reduceMoneyToWithdraw(money) {
    event.preventDefault();
    total_withdraw = Number(document.getElementById('total_withdraw').innerHTML);
    money = Number(money);
    if (total_withdraw >= money) {
        document.getElementById('total_withdraw').innerHTML = total_withdraw - money;
    }
    else {
        document.getElementById('total_withdraw').innerHTML = 0
    }
}

function clearBtn() {
    document.getElementById('total_withdraw').innerHTML = 0
}

function withDraw() {
    balance_in_wallet = Number(document.getElementById('balance_in_wallet').innerHTML);
    total_withdraw = Number(document.getElementById('total_withdraw').innerHTML);
    balance_in_atm = Number(document.getElementById('balance_in_atm').innerHTML);
    if (total_withdraw == 0) {
        Swal.fire({
            icon: 'warning',
            title: 'คำเตือน',
            text: 'ท่านไม่ได้ระบุจำนวนเงินที่ต้องการถอน',
            footer: 'กรุณาลองใหม่อีกครั้ง หากพบปัญหาโปรดติดต่อ 0xx-xxxxxxx',
        })
    }
    else if (total_withdraw <= balance_in_atm) {
        document.getElementById('balance_in_wallet').innerHTML = balance_in_wallet + total_withdraw;
        document.getElementById('balance_in_atm').innerHTML = balance_in_atm - total_withdraw;
        document.getElementById('total_withdraw').innerHTML = 0

        var myList = document.getElementById('myList');
        var li1 = document.createElement('li');
        var div1 = document.createElement('div');
        div1.classList.add('fs-5');
        div1.textContent = 'ทำรายการเบิกถอนจำนวน ' + total_withdraw + ' บาท';
        li1.appendChild(div1);
        var li2 = document.createElement('hr');

        myList.appendChild(li1);
        myList.appendChild(li2);


        Swal.fire({
            icon: 'success',
            title: 'สำเร็จ',
            text: 'รายการถอนของท่านเงินสำเร็จ',
            footer: 'ยินดีให้บริการ หากพบปัญหาโปรดติดต่อ 0xx-xxxxxxx',
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'ขออภัย',
            text: 'ยอดเงินของคุณไม่เพียงพอ',
            footer: 'กรุณาลองใหม่อีกครั้ง หากพบปัญหาโปรดติดต่อ 0xx-xxxxxxx',
        });
    }

    balance_in_atm = Number(document.getElementById('balance_in_atm').innerHTML);
    myParagraph = document.getElementById('balance_in_atm_alert_color');
    if (balance_in_atm <= 5000 & balance_in_atm != 0) {
        myParagraph.classList.remove('alert-warning');
        myParagraph.classList.add('alert-danger');
    }

    if (balance_in_atm == 0) {
        myParagraph.classList.remove('alert-warning');
        myParagraph.classList.remove('alert-danger');
        myParagraph.classList.add('alert-dark');
    }
}

