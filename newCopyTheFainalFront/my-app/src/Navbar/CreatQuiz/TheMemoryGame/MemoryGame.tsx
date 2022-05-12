import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import Uirender from './Memory/Uirender';
import './Memory.css'

export function MemoryGame() {

  let [imgUrl, setImgUrl] = useState({
    gameName: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: ""
  })



  let [someStr, setSomeStr] = useState("");
  function textWasChanged(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLButtonElement>,
    whichField: string) {
    let newObj = {
      ...imgUrl,
      ...{
        [whichField]: e.target.value
      }
    };
    setImgUrl(newObj);
  }



  function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post("http://localhost:2006/memoryGame/addImages", {
      "gameName": `${((document.querySelector('#gameName')) as HTMLInputElement).value}`,
      "imageUrl1": `${((document.querySelector('#imageUrl1')) as HTMLInputElement).value}`,
      "imageUrl2": `${((document.querySelector('#imageUrl2')) as HTMLInputElement).value}`,
      "imageUrl3": `${((document.querySelector('#imageUrl3')) as HTMLInputElement).value}`,
      "imageUrl4": `${((document.querySelector('#imageUrl4')) as HTMLInputElement).value}`,
      "imageUrl5": `${((document.querySelector('#imageUrl5')) as HTMLInputElement).value}`,
      "imageUrl6": `${((document.querySelector('#imageUrl6')) as HTMLInputElement).value}`,

    })
      .then((result) => {
        console.log(result.data);
        alert(result.data);
      })
 
  }


  return (
    <div className='imagMemoryGame'>
     
      <form id="imagesMemoryForm" onSubmit={(e) => { formWasSubmitted(e) }}>

        <div className="divAroundGame">
          <label className='lblGame'>Game name:
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSomeStr(e.target.value);
              textWasChanged(e, "gameName")
            }}
              type="text" id="gameName" name="gameName" placeholder="gameName" />
          </label>
          <label className='lblGame'>
            <input onChange={(e) => { textWasChanged(e, "imageUrl1") }}
              type="file" id="imageUrl1" name="imageUrl1" placeholder="imageUrl1" />
          </label>
          <label className="lblGame">
            <input onChange={(e) => { textWasChanged(e, "imageUrl2") }}
              type="file" id="imageUrl2" name="imageUrl2" placeholder="imageUrl2" />
          </label>
          <label className='lblGame'>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSomeStr(e.target.value);
              textWasChanged(e, "imageUrl3")
            }}
              type="file" id="imageUrl3" name="imageUrl3" placeholder="imageUrl3" />
          </label>
          <label className='lblGame'>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSomeStr(e.target.value);
              textWasChanged(e, "imageUrl4")
            }}
              type="file" id="imageUrl4" name="imageUrl4" placeholder="imageUrl4" />
          </label>
          <label className='lblGame'>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSomeStr(e.target.value);
              textWasChanged(e, "imageUrl5")
            }}
              type="file" id="imageUrl5" name="imageUrl5" placeholder="imageUrl5" />
          </label>
          <label className='lblGame'>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSomeStr(e.target.value);
              textWasChanged(e, "imageUrl6")
            }}
              type="file" id="imageUrl6" name="imageUrl6" placeholder="imageUrl6" />
          </label>

        </div>
        <label className='submitLbl'>
          <input type="submit" value={"Submit"} />
        </label>
      </form>
      <br />
      <div className='memoryCards'>
      <Uirender />
      </div>
    </div>
  )
}







