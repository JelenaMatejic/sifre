// PMF NI RN
let letters = document.querySelectorAll('input[type="text"]');
let letter1 = document.getElementById('letter1');
let letter2 = document.getElementById('letter2');
let letter3 = document.getElementById('letter3');
let letter4 = document.getElementById('letter4');
let letter5 = document.getElementById('letter5');
let letter6 = document.getElementById('letter6');
let letter7 = document.getElementById('letter7');
let submit = document.getElementById('submit');

const langmap = {
    "A": "А",
    "B": "Б",
    "V": "В",
    "G": "Г",
    "D": "Д",
    "Đ": "Ђ",
    "E": "Е",
    "Ž": "Ж",
    "Z": "З",
    "I": "И",
    "J": "Ј",
    "K": "К",
    "L": "Л",
    "LJ": "Љ",
    "M": "М",
    "N": "Н",
    "NJ": "Њ",
    "O": "О",
    "P": "П",
    "R": "Р",
    "S": "С",
    "T": "Т",
    "Ć": "Ћ",
    "U": "У",
    "F": "Ф",
    "H": "Х",
    "C": "Ц",
    "Č": "Ч",
    "DŽ":"Џ",
    "Š": "Ш",
    "Y" : "Y",
    "X" : "X",
    "W" : "W",
    "Q" : "Q",

    "А": "А",
    "Б": "Б",
    "В": "В",
    "Г": "Г",
    "Д": "Д",
    "Ђ": "Ђ",
    "Е": "Е",
    "Ж": "Ж",
    "З": "З",
    "И": "И",
    "Ј": "Ј",
    "К": "К",
    "Л": "Л",
    "Љ": "Љ",
    "М": "М",
    "Н": "Н",
    "Њ": "Њ",
    "О": "О",
    "П": "П",
    "Р": "Р",
    "С": "С",
    "Т": "Т",
    "Ћ": "Ћ",
    "У": "У",
    "Ф": "Ф",
    "Х": "Х",
    "Ц": "Ц",
    "Ч": "Ч",
    "Џ": "Џ",
    "Ш": "Ш",
}

submit.addEventListener('click', e => {
    e.preventDefault();
    let word = letter1.value + letter2.value + letter3.value + letter4.value + letter5.value + letter6.value + letter7.value;

    word = word.toUpperCase();
    word.replace(/\s/g, "");

    if(word == "ПМФНИРН" ||  word == "PMFNIRN") {
        swal({
            title: "Честитамо!",
            text: "Успешно сте открили лозинку!",
            icon: "success",
          });
    } else {
        swal({
            title: "Грешка!",
            text: "Ово није тражена лозинка, покушајте опет!",
            icon: "error",
          });
    }
});

letters.forEach(el => 
    el.onkeyup = e => {
        if(e.keyCode == 8 && e.target.id != "letter1"){
            el.previousElementSibling.focus();
        }
        else if (e.target.value) {
            let letter = e.target.value;
            letter = letter.toUpperCase();

            if(letter.match(/([A-ZČĆĐŽŠЧЋЖШЂЉЊ])/i)){
                e.target.value = langmap[letter];
            }
            
            if(e.target.id != "letter7"){
                el.nextElementSibling.focus();
            }            
        }
    }
)

