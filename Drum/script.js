//document.querySelectorAll(".drum")[0].addEventListener('click',playSong);

function playSong(key){
    switch(key){
        case 'm':
            let mySound1=new Audio('assets/Yaar Bina Chain Kaha Re Arey Pyaar Kar Le.mp3');
            mySound1.play();
            break;

        case 'a':
            let mySound2=new Audio('assets/chaiya.mp3');
            mySound2.play();
            break;
        
        case 's':
            let mySound3=new Audio('assets/Main Nikla Gaddi Leke - Udit Narayan.mp3');
            mySound3.play();
            break;
        
        case 'd':
            let mySound4=new Audio('assets/Saiya Hai Vyapari - Sasural Genda Phool - Dehli 6 - Sujata Majumdar ! Hindi.mp3');
            mySound4.play();
            break;
        
        case 'j':
            let mySound5=new Audio('assets/Tumse Milna Purani Dilli Me - Kajra Re ! Hindi.mp3');
            mySound5.play();
            break;

        case 'k':
            let mySound6=new Audio('assets/Tu hai wahi dil ne jise apna kaha - Sanam Puri.mp3');
            mySound6.play();
            break;

        case 'l':
            let mySound7=new Audio('assets/Rafta Rafta Dekho Aankh Meri Ladi Hai ! Dharmendra ! Hindi.mp3');
            mySound7.play();
            break;
        
        default:
            alert('Wrong Button');
    }
}

for(let i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener('click',(events)=>{
        console.log(events.target.innerHTML);
        let btn=events.target.innerHTML;
        playSong(btn);
    });
}