const textInput = document.getElementById("inputText")

function reverseStringWay1(str){
    return str.split("").reverse().join("")
}
function check(){
    const text = textInput.value
    const text2 = reverseStringWay1(text)
    
    if(text2 === text)
        alert(`Yes, the text: ${text} is palindrome`)
    else
    alert(`No, the text: ${text} is not palindrome`)

    textInput.value = ""
}