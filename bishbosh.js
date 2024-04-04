function bishBoshString(bishPeriod, boshPeriod, length){
    let stringBuffer = '';
    let onFirst = true;
    for (let i =1 ; i <= length; i++)
    {
        if(onFirst)
            onFirst = false;
        else
            stringBuffer += ', ';
        let useNumber = true;
        let bish = false;
        if(i % bishPeriod == 0)
        {
            useNumber = false;
            bish = true;
            stringBuffer += 'Bish';
        }
        if(i % boshPeriod == 0)
        {
            useNumber = false;
            if (bish)
                stringBuffer += '-';
            stringBuffer += 'Bosh';
        }
        if(useNumber)
        {
            stringBuffer += i;
        }
    }
    return stringBuffer
}

// I really hope this is not the best way to do this.
function parseIntStrict(string){
    parsed = parseInt(string);
    if(Number.isInteger(parsed) && string == parsed)
        return parsed;
    else
        return NaN;
}

function showBishBoshString(){
    let bishPeriod = parseIntStrict(document.getElementById("bish").value);
    let boshPeriod = parseIntStrict(document.getElementById("bosh").value);
    let length = parseIntStrict(document.getElementById("length").value);
     if (!Number.isInteger(bishPeriod) || !Number.isInteger(boshPeriod) || !Number.isInteger(length) || bishPeriod <= 0 || boshPeriod <= 0 || length <= 0){
        document.getElementById("output").value = "Nej!";
        return;
    }
    document.getElementById("output").value = bishBoshString(bishPeriod, boshPeriod, length)
}

showBishBoshString()
document.getElementById("bish").addEventListener("change", showBishBoshString)
document.getElementById("bosh").addEventListener("change", showBishBoshString)
document.getElementById("length").addEventListener("change", showBishBoshString)
