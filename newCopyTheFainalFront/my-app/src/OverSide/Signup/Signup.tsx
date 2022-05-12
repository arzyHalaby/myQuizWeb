import './Signup.css'
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export function Signup() {
    const navigate = useNavigate();
    let [formInfo, setFormInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        userName: "",
        password: ""
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
        axios.post("http://localhost:2006/teachers/addTeacher", {
            "firstname": `${((document.querySelector('#firstname')) as HTMLInputElement).value}`,
            "lastname": `${((document.querySelector('#lastname')) as HTMLInputElement).value}`,
            "email": `${((document.querySelector('#email')) as HTMLInputElement).value}`,
            "userName": `${((document.querySelector('#userName')) as HTMLInputElement).value}`,
            "password": `${((document.querySelector('#password')) as HTMLInputElement).value}`,
        })
            .then((result) => {
                console.log(result.data);
                alert(result.data);
                navigate(`/login`);
            })
    }
    return (
        <div className='AllTeacherForm'>
            {/* <div className='TeacherForm'> */}
                <h3>{someStr.length > 0 && `Hello ${someStr}`}</h3>
                <form id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>
                    <div className="divAroundName">
                        <div className='theIcon'>
                            <FontAwesomeIcon className="icon" icon={faAddressCard} /></div>



                        <label className='lblForm'>Name:
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSomeStr(e.target.value);
                                textWasChanged(e, "firstname")
                            }}
                                type="text" id="firstname" name="firstname" placeholder="First" />
                        </label>
                        <label className='lblForm'>
                            <input onChange={(e) => { textWasChanged(e, "lastname") }}
                                type="text" id="lastname" name="lastname" placeholder="Last" />
                        </label>
                        <label className="lblForm">
                            <input onChange={(e) => { textWasChanged(e, "email") }}
                                type="text" id="email" name="email" placeholder="@gmail.com" />
                        </label>
                        <label className='lblForm'>User name:
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSomeStr(e.target.value);
                                textWasChanged(e, "userName")
                            }}
                                type="text" id="userName" name="userName" placeholder="userName" />
                        </label>
                        <label className='lblForm' htmlFor="password">Create a password:
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSomeStr(e.target.value);
                                textWasChanged(e, "password")
                            }}
                                type="password" id="password" name="password" />
                        </label>
                        <div className='submitlbl'>
                            <label >
                                <input type="submit" value={"Submit"} />
                            </label>
                        </div>
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}



