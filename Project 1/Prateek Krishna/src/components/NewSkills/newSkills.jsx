import React from "react";
import "./newSkills.css"

function NewSkills(){
    
    return (
        <div id="newSkillsPage" className="new-skills">
          <h1 id="skills-heading" className="skills-heading">Skills</h1>
          <hr className="hrule-newSkills" />
          <div className="mySkills">
            <img alt="skill-logo" className="skill-logo" src="/image/dart.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/java.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/flutter.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/javascript.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/mongo.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/express.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/react.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/node.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/github.png"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/next.png"></img>
            {/* <img alt="skill-logo" className="skill-logo" src="/image/materialui.png"></img> */}
            <img alt="skill-logo" className="skill-logo" src="/image/python.svg"></img>
            {/* <img alt="skill-logo" className="skill-logo" src="/image/java.png"></img> */}
            <img alt="skill-logo" className="skill-logo" src="/image/cpp.png"></img>
            {/* <img alt="skill-logo" className="skill-logo" src="/image/rust.svg"></img>
            <img alt="skill-logo" className="skill-logo" src="/image/firebase.png"></img> */}
          </div>
        </div>
      );
}

export default NewSkills;