let giay = 0, phut = 0, gio = 0;
let run;
function start() {
    console.clear();
    giay = 0, phut = 0,gio = 0;
    run = setInterval(() =>{
        giay++;
        if(giay == 60){
            phut++;
            giay = 0;
        }if(phut == 60){
            gio++;
            phut = 0;
        }if(gio == 24){
            gio = 0;
        }
        giay = giay.toString().length == 1 ? '0' + giay : giay;
        phut = phut.toString().length == 1 ? '0' + phut : phut;
        gio = gio.toString().length == 1 ? '0' + gio : gio;
        console.log(`${gio} : ${phut} : ${giay}`);
        document.getElementById('screen').textContent = `${gio} : ${phut} :${giay}`;
    },1000);
}
    function Pause() {
        clearInterval(run);
    }
    function resume() {
        run = setInterval(() =>{
            giay++;
            if(giay == 60){
                phut++;
                giay = 0;
            }if(phut == 60){
                gio++;
                phut = 0;
            }if(gio == 24){
                gio = 0;
            }
            giay = giay.toString().length == 1 ? '0' + giay : giay;
            phut = phut.toString().length == 1 ? '0' + phut : phut;
            gio = gio.toString().length == 1 ? '0' + gio : gio;
            console.log(`${gio} : ${phut} : ${giay}`);
            document.getElementById('screen').textContent = `${gio} : ${phut} :${giay}`;
        },1000);
    }
