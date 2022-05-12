import React, { useState } from 'react'
import axios from 'axios';
import { shuffleArray } from '../CreatQuiz/TheQuiz/utils';
import { Question } from '../CreatQuiz/TheQuiz/API';

export function AddNewGame() {

    let [formInfo, setFormInfo] = useState({
        gameName: "",
        category: "",
        correct_answer: "",
        // difficulty: "",
        incorrect_answers: ["", "", ""],
        question: "",
        // type: "",

    })
    let [someStr, setSomeStr] = useState("");
    function textWasChanged(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        whichField: string) {
        let newObj = {
            ...formInfo,
            ...{
                [whichField]: e.target.value
            }
        };
        setFormInfo(newObj);
    }



    function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post("http://localhost:2006/theQuestion/addTheQuestion/", {
            "gameName": `${((document.querySelector('#gameName')) as HTMLInputElement).value}`,

            "category": `${((document.querySelector('#gameName')) as HTMLInputElement).value}`,
            "correct_answer": `${((document.querySelector('#correct_answer')) as HTMLInputElement).value}`,
            // "difficulty": `${((document.querySelector('#difficulty')) as HTMLInputElement).value}`,
            "incorrect_answers": [((document.querySelector('#incorrect_answers')) as HTMLInputElement).value,
            ((document.querySelector('#incorrect_answers')) as HTMLInputElement).value,
            ((document.querySelector('#incorrect_answers')) as HTMLInputElement).value],
            "question": `${((document.querySelector('#question')) as HTMLInputElement).value}`,
            // "type": `${((document.querySelector('#type')) as HTMLInputElement).value}`,

        })

            .then((result) => {
                console.log(result.data);
                alert(result.data);
            })
    }
     const createNewQuiz = async (amount: number) => {
        const endpoint = `http://localhost:2006/theQuestion/getTheQuestion/`;
        const data = await  postData(endpoint,formInfo);
        console.log(data, "==================")
        //=============insert to database====for the questions======
      
        const url = `http://localhost:2006/theQuestion/getQuestion/`;
        const data1 = await (await fetch(url)).json();
        return data.results.map((question: Question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }}
    return (
        <div className='TeacherForm'>

            <form id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

                <div className="divAroundName">
                    <label className='lblForm'>gameName:
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value || 'arzy');
                            textWasChanged(e, "gameName")
                        }}
                            type="text" id="gameName" name="gameName" placeholder="gameName" />
                    </label>
                    <label className='lblForm'>category:
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value || "ofra");
                            textWasChanged(e, "category")
                        }}
                            type="text" id="gameName" name="gameName" placeholder="gameName" />
                    </label>
                    <label className='lblForm'> correct_answer
                        <input onChange={(e) => { textWasChanged(e, "correct_answer" || "ameer") }}
                            type="text" id="question" name="question" placeholder="question" />
                    </label>
                    {/* <label className="lblForm">difficulty
                        <input onChange={(e) => { textWasChanged(e, "difficulty") }}
                            type="text" id="correctAnswer" name="correctAnswer" placeholder="correctAnswer" />
                    </label> */}
                    <label className='lblForm'>incorrect_answers  :
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "incorrect_answers" || "barakat")
                        }}
                            type="text" id="answer1" name="answer1" placeholder="answer1" />
                    </label>
                    <label className='lblForm'>incorrect_answers  :
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "incorrect_answers" || "maha")
                        }}
                            type="text" id="answer1" name="answer1" placeholder="answer1" />
                    </label>
                    <label className='lblForm'>incorrect_answers  :
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "incorrect_answers" || "deema")
                        }}
                            type="text" id="answer1" name="answer1" placeholder="answer1" />
                    </label>
                    <label className='lblForm'>question :
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "question" || "zahra")
                        }}
                            type="text" id="answer2" name="answer2" placeholder="answer2" />
                    </label>
                    {/* <label className='lblForm'>type :
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "type")
                        }}
                            type="text" id="answer3" name="answer3" placeholder="answer3" />
                    </label> */}



                </div>
                <label className='submitLbl'>
                    <input type="submit" value={"Submit"} />
                </label>
            </form>
        </div>
    )
}
