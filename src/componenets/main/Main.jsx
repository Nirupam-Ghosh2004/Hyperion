import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const {
    input,
    setInput,
    onSent,
    resultData,
    setResultData,
    loading,
    setLoading,
    showResponse,
    setShowResponse,
    recentPrompt,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Hyperion</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResponse ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Sup, Dev?</span>
              </p>
              <p>How can I assist you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some places to visit in Kolkata</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>What are the symptoms of Diabetes ?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve readability of code</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card">
                <p>How to install auto-cpufreq in Arch linux ?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>{" "}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> :  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
             
            </div>
          </div>    
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
             
              <img onClick={onSent} src={assets.send_icon} />
            </div>
          </div>
          <p className="bottom-info">
          Hyperion powered by Gemini AI. Made by Nirupam Ghosh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
