
const begin = document.querySelector('.button_begin');
const startTest = document.querySelector('.startTest');


const getAnswer = document.querySelector('.button_getAnswer');
const skipQuestion = document.querySelector('.button_skipQuestion');

const comment = document.querySelector('.comment');

const itemTitle = document.querySelectorAll('.item__title');

itemTitle.forEach(function(el) {
    el.addEventListener('click', function(event) {
        event.currentTarget.closest('.settings__grid-item').querySelector('.item__form').classList.toggle('displFlex');
        event.currentTarget.classList.toggle('heightAuto')
    })
})


let quest = [];
let questObj = [];
let level
begin.addEventListener("click", function(event) {
    const checkbox = document.querySelectorAll('[type="checkbox"]');
    const radio = document.querySelectorAll('[type="radio"]');
   
    checkbox.forEach(function(el) {
        if (el.checked) {
            if (el.getAttribute('id') == 'html'){
                questObj = questionsHtml;
            } else if (el.getAttribute('id') == 'css'){
                questObj = questionsCss;
            } else if (el.getAttribute('id') == 'js'){
                questObj = questionsJs;
            }
            quest = quest.concat(questObj);
        }
    })

    radio.forEach(function(el) {
        if (el.checked)  return level = +el.getAttribute('data-count')
    })

    if (!document.querySelector('.item__form-firstname_input').value) {
        alert('В ваших данных не хватает имени')
    } else if (!document.querySelector('.item__form-lastname_input').value) {
        alert('В ваших данных не хватает фамилии')
    } else {
        document.querySelector('.settings').style.display = "none"
        document.querySelector('.rules').style.display = "flex"
    }
    
})


startTest.addEventListener('click', function(event) {
    document.querySelector('.test').style.display = "flex"
    document.querySelector('.rules').style.display = "none"
    const game = {
        questions: quest,
        default: {
            answerTime: 60,
            hintTime: 10,
            placeholder: '*'
        },
        questionsCount: undefined,
        score: 0,
        counter: undefined,
        stepTimerId: undefined,
        currentQuest: undefined,
        gameMode: level,
        started: function() {
            return alert('Вы готовы начать?');
        },
        showQuestion: function(question) {
            if ((this.gameMode == 0) || (this.gameMode == 2)) {
                document.querySelector('.question').innerText = `${question.text}`;
            } if (this.gameMode == 1) {
                document.querySelector('.question').innerText = `${question.text} (${question.answer.length} букв)`;
            }
            comment.innerText = "";
            document.querySelector('.answer').focus();
        },
        getRandomQuestion: function() {
            const index = getRandom(this.questions.length);
            const item = this.questions.splice(index, 1)[0];

            return item;
        },
        writeDownAnswer: function(answer) {

            
            const check = answer.toLowerCase() == this.currentQuest.answer.toLowerCase();

            if (check) {
                this.stopTick(this.stepTimerId);
                comment.innerText = 'Молодец! Так держать!';
                this.scoreInc();
                document.querySelector(".answer").value = "";
                this.step();
            } else {
                comment.innerText = 'Подумай еще';
                document.querySelector(".answer").value = "";
            }
        },
        scoreInc: function() {
            this.score++;
        },
        showScore: function() {
            // console.clear();
            comment.innerText = `Ваш рейтинг ${Math.round(this.score/this.questionsCount*100)}% (вы ответили на ${this.score} вопросов из ${this.questionsCount})`;
        },
        tick: function(callback) {
            const that = this;
            this.counter = this.default.answerTime;

            let timer = setTimeout(function tick() {
                
                // console.clear();

                if (that.counter > 0) {
                    timer = setTimeout(tick, 1000);
                } else {
                    that.step();
                }


                that.showQuestion(that.currentQuest);

            
                if ((that.gameMode == 0) || (that.gameMode == 1)) {

                
                    if (that.counter % that.default.hintTime == 0 && that.counter > 0) {
                        document.querySelector('.hint').innerText =  that.getHint() 
                    } else {
                        document.querySelector('.hint').innerText = that.currentQuest.hint;
                        
                    }
                }

                document.querySelector('.timer').innerText = that.counter--;
                
                that.stepTimerId = timer;

                
                if (callback) callback();
            }, 1000);

        },
        stopTick: function(id) {
            clearTimeout(id);
        },
        step: function() {
            if ( !this.questions.length ) {
                this.stop();
                return;
            }
            // console.clear();
            this.currentQuest = this.getRandomQuestion();
            this.genHintTime();


            this.tick();

            

        },
        getHint: function() {
            if (this.gameMode == 0) {
                let hint = []
                for (let key in this.currentQuest) {
                    if ((key == 'a') || (key == 'b') || (key == 'c')) {    
                            hint.push(`${this.currentQuest[key].text}             `);
                    }
                }
                
                this.currentQuest.hint = hint.join(" || ");
            } else if (this.gameMode == 1) {

            
                if (!this.currentQuest.hint){
                    this.currentQuest.hint = this.currentQuest.hint || this.currentQuest.answer.split('').map(() => this.default.placeholder).join('');
                } else {

                    let hint = this.currentQuest.hint.split('');
                    let index = getRandom( this.currentQuest.answer.length );

                    while ( hint[index] != this.default.placeholder ) {
                        index = getRandom( this.currentQuest.answer.length );
                    }
                    
                    hint[index] = this.currentQuest.answer[index];

                    this.currentQuest.hint = hint.join('');

                }
            }

            return this.currentQuest.hint;
        },
        genHintTime: function() {
            const def = this.default;
            const length = this.currentQuest.answer.length;

            def.hintTime = length < 6 ? Math.floor(def.answerTime / length) : def.hintTime;
        },
        start: function name() {
            // this.started();
            this.questionsCount = this.questions.length;
            this.step();
        },
        stop: function name() {
            this.showScore();
        },

        onotoleSay: function() {
            this.writeDownAnswer( this.currentQuest.answer );
        }
    };


    getAnswer.addEventListener('click', function(event) {
        const ansquest = document.querySelector(".answer").value;
        
        if (ansquest) game.writeDownAnswer(ansquest)
    })


    skipQuestion.addEventListener('click', function(event) {
        game.stopTick(game.stepTimerId);
        comment.innerText = 'Ничего! Еще есть вопросы';
        document.querySelector(".answer").value = "";
        game.step();
    })


    document.querySelector('.answer').addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            const ansquest = document.querySelector(".answer").value;

            if (ansquest) game.writeDownAnswer(ansquest)
        } else if (event.keyCode === 27) {
            game.stopTick(game.stepTimerId);
            comment.innerText = 'Ничего! Еще есть вопросы';
            document.querySelector(".answer").value = "";
            game.step();
        }

    });


    function getRandom(max) {
        return Math.floor(Math.random() * ((max - 1) + 1));
    }


    game.start();
})


