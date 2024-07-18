        function convert(){
            var fromUnit = document.getElementById('fromUnit').value;
            var toUnit = document.getElementById('toUnit').value;
            var temperature = parseFloat(document.getElementById('temperature').value);

            var convertedValue;
            var result;


            switch (fromUnit){
                case 'C':
                    if (toUnit === 'F'){
                        convertedValue = (temperature * 9/5) +32;
                        result = 'F';
                    } else if (toUnit === 'K'){
                        convertedValue = temperature + 273.15;
                        result = 'K';
                    }
                    else{
                        convertedValue = temperature;
                        result = 'C';
                    }
                    break;

                    case 'F':
                    if (toUnit === 'C'){
                        convertedValue = (temperature -32) * 5/9;
                        result = 'C';
                    } else if (toUnit === 'K'){
                        convertedValue = (temperature -32) * 5/9 + 273.15;
                        result = 'K';
                    }
                    else{
                        convertedValue = temperature;
                        result = 'F';
                    }
                    break;

                    case 'K':
                    if (toUnit === 'C'){
                        convertedValue = temperature - 273.15;
                        result = 'C';
                    } else if (toUnit === 'K'){
                        convertedValue = (temperature - 273.15) * 9/5 +32;
                        result = 'K';
                    }
                    else{
                        convertedValue = temperature;
                        result = 'K';
                    }
                    break;
            }

            document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + result;
            
        }
    