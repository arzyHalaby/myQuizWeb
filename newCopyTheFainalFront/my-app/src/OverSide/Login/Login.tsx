import './Login.css'
import { HTMLInputTypeAttribute, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../Profile';

export function Login() {
    const navigate = useNavigate();

    let [formInfo, setFormInfo] = useState({
        userName: "",
        email: "",
        password: "",
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
        const url = `http://localhost:2006/teachers/:email${formInfo.email}`;

        axios.get(url)
            .then(res => {

                console.log(res.data)
                alert(res.data);
                navigate(`/Profile`);
            });



        // axios.delete(url)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //         alert(res.data);
        //     });
        //--------------------------------------------------------------------------------

        // axios.put(url)
        //     .then(res => {
        //         console.log(res.data);
        //         alert(res.data);
        //     });

        // let queryParamsStr = `https://cyberfighters.herokuapp.com/qa-exercises/new-customer-registers/?`;
        // let isFirst = true;
        // for (const [k, v] of Object.entries(formInfo)) {
        //     if (isFirst === false) {
        //         queryParamsStr += `&${k}=${v}`
        //     }
        //     else {
        //         isFirst = false;
        //         queryParamsStr += `${k}=${v}`
        //     }
        // }
        // console.log(queryParamsStr);

        // $.ajax({
        //     url: queryParamsStr,
        //     success: function (result: string) {
        //         console.log(result);
        //     }
        // });
    }
    return (
        <div className='allLoginBadge'>
        <div className='allLogIn'>

            <form id="contactLogIn" onSubmit={(e) => { formWasSubmitted(e) }}>
                <div>
                    <label className="lblLogin"> User name :</label>
                    <label>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "userName")
                        }}
                            type="text" id="userName" name="userName" placeholder="User name" />
                    </label>
                </div>
                <div>
                    <label className='lblLogin' htmlFor="password"> Password :</label>
                    <label>
                        <input
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setSomeStr(e.target.value);
                                textWasChanged(e, "password")
                            }}
                            type="password" id="password" name="password" placeholder="password" />
                    </label>
                </div>
                <label className='lblLogin' htmlFor="email"> Email :</label>
                <label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "email")
                        }}
                        type="text" id="email" name="email" placeholder="@gmail.com" />
                </label>
                <label>
                    <input type="submit" value={"Submit"} />
                </label>
                {/* <label className='deletButton' htmlFor="deletButton">
                    <button onChange={(e: React.ChangeEvent<HTMLButtonElement>) => {
                        setSomeStr(e.target.value);
                        textWasChanged(e, "delete")
                    }}>Delete</button>
                </label> */}
            </form>
        </div>
        </div>
 
    )
}


