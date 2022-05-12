import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Profil.css';
import axios from 'axios';



export function Profile() {
  const navigate = useNavigate();

  let [formInfo, setFormInfo] = useState({
    gameName: "",
    question: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  })
  let [someStr, setSomeStr] = useState("");
  function textWasChanged(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLButtonElement>,
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
    console.log(formInfo);
    const url = `http://localhost:2006/theQuestion/${formInfo.gameName}`;

    axios.get(url)
      .then(res => {
        console.log("arzyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

        console.log(res.data)
        alert(res.data);


      });

  }
  return (
    <div className="prfil">
      <h2 className="profilHaeder"> this is your profil bage</h2>
      <div className="allButtons">

        {/* <button className="button"> choose game template</button> */}
        <Link to={"createQuiz"}> to choose the game </Link>
        <button className="button"> lest of your games</button>
        <button className="button"> update your games </button>
        <button className="button"> retrieval the result</button>
        <button className="button"> delete your account</button>
      </div>

      <div className='TeacherForm'>

        <form id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

          <div className="divAroundName">
            <label className='lblForm'>Game name:
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSomeStr(e.target.value);
                textWasChanged(e, "gameName")
              }}
                type="text" id="gameName" name="gameName" placeholder="gameName" />
            </label>
          </div>

          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  )
}


