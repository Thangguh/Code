function processData() {
    let inputData = document.getElementById('input').value.trim();
    let dataArray = inputData.split(',').map(Number);

    let gajiArray = dataArray.map(function (num){
        return num + 0.30 * num

    })
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = 'Gaji Total:<p>' + gajiArray.join(',') + '</p>';

}