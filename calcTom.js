
function calc () {
    function check(myRadioButtons, myInputFields){
        var rdSinglePhase = myRadioButtons.rdSinglePhase;
        var rdThreePhase = myRadioButtons.rdThreePhase;
        var rdDc = myRadioButtons.rdDc;
        var rdAlluminium = myRadioButtons.rdAlluminium;
        var rdCopper = myRadioButtons.rdCopper;
        var rdCurrent = myRadioButtons.rdCurrent;
        var rdPower = myRadioButtons.rdPower;
        var add = myRadioButtons.yam;

        // My Inputs
        var loadValue = Number(myInputFields.loadValue.value);
        var distBtwRun = Number(myInputFields.distBtwRun.value);
        var maxPermDrop = Number(myInputFields.maxPermDrop.value);
        var sysVoltage = Number(myInputFields.sysVoltage.value);
        var fp = Number(myInputFields.fp.value);

        var rohAlu = 0.0000000265; 
        var rohCop = 0.0000000168;
        var answer = 0.00;
        fp = 0.8;
        if(rdSinglePhase.checked && rdCurrent.checked && rdAlluminium.checked){
            if (loadValue == 0){
                ans = "0";
            }else{
            // console.log(loadValue);
            // console.log(rohAlu);
            // console.log(distBtwRun);
            // answer = 0.00;
            answer = (((100*loadValue*rohAlu*distBtwRun)/((100-maxPermDrop)*sysVoltage))*1000000)
           console.log(answer);
        }
        }
        else if (rdSinglePhase.checked && rdCurrent.checked && rdCopper.checked)  {
            answer = (((100*loadValue*rohCop*distBtwRun)/((100-maxPermDrop)*sysVoltage))*1000000)
            console.log(answer);
        } 
        else if (rdSinglePhase.checked && rdPower.checked && rdAlluminium.checked){
            answer =(((100*loadValue*rohAlu*distBtwRun)/((100-maxPermDrop)*((sysVoltage**2)*(fp)))*1000000))
            console.log(add);
            console.log(answer);
        }
        else if (rdSinglePhase.checked && rdPower.checked && rdCopper.checked){
            answer =(((100*loadValue*rohCop*distBtwRun)/((100-maxPermDrop)*((sysVoltage**2)*(fp)))*1000000))
            console.log(add);
            console.log(answer);
        }

        // 3 Phase AC
        else if (rdThreePhase.checked && rdCurrent.checked && rdAlluminium.checked){
            answer = (((100*loadValue*rohAlu*distBtwRun)/((100-maxPermDrop)*(3**0.5)*sysVoltage))*1000000);
            console.log(answer);
        }

        else if (rdThreePhase.checked && rdCurrent.checked && rdCopper.checked){
            answer = (((100*loadValue*rohCop*distBtwRun)/((100-maxPermDrop)*(3**0.5)*sysVoltage))*1000000);
            console.log(answer);
        }
        else if (rdThreePhase.checked && rdPower.checked && rdAlluminium.checked){
            answer = (((100*loadValue*rohAlu*distBtwRun)/((3*(100-maxPermDrop))*(sysVoltage**2)))*1000000)
            console.log(answer);
        }

        else if (rdThreePhase.checked && rdPower.checked && rdCopper.checked){
            answer = (((100*loadValue*rohCop*distBtwRun)/((3*(100-maxPermDrop))*(sysVoltage**2)))*1000000)
            console.log(answer);
        }

        
        // DC
        else if (rdDc.checked && rdCurrent.checked && rdAlluminium.checked){
            answer = (((100*loadValue*rohAlu*distBtwRun)/((100-maxPermDrop)*sysVoltage))*1000000)
            console.log(answer);
        }
        else if (rdDc.checked && rdCurrent.checked && rdCopper.checked){
            answer = (((100*loadValue*rohCop*distBtwRun)/((100-maxPermDrop)*sysVoltage))*1000000)
            console.log(answer);
        }

        else if (rdDc.checked && rdPower.checked && rdAlluminium.checked){
            answer = (((100*loadValue*rohAlu*distBtwRun)/((100-maxPermDrop)*(sysVoltage**2)))*1000000)
            console.log(answer);
        }
        else if (rdDc.checked && rdPower.checked && rdCopper.checked){
            answer = (((100*loadValue*rohCop*distBtwRun)/((100-maxPermDrop)*(sysVoltage**2)))*1000000)
            console.log(answer);
        }
        ans = answer.toFixed(2)
        document.getElementById('answer').innerHTML = ans;
        
}

check(myRadioButtons, myInputFields);
}

