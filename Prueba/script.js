   
window.addEventListener("load", () => {

    let result = [3,3,3,3,3,3,3,3,3,3];

    let selectedOption = [];

    let correct = 0;

    function answer(number, selected){
        selectedOption[number] = selected.value;

        id ='q'+number;

        labels = document.getElementById(id).childNodes;
        labels[0].style.backgroundColor = 'white';
        labels[1].style.backgroundColor = 'white';
        labels[2].style.backgroundColor = 'white';
        labels[3].style.backgroundColor = 'white';
        labels[4].style.backgroundColor = 'white';
        labels[5].style.backgroundColor = 'white';
        labels[6].style.backgroundColor = 'white';
        labels[7].style.backgroundColor = 'white';
        labels[8].style.backgroundColor = 'white';
        labels[9].style.backgroundColor = 'white';
        



        selected.parentNode.style.backgroundColor = '#cec0fc';
    }

    function save(){
        correct = 0
        for(i = 0; i< result.length; i++){
            if(result[i] == selectedOption[i]){
                correct++;
            }
        }
        document.getElementById('result').innerHTML = correct;
    }
});