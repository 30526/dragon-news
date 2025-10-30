import React from "react";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Qzone from "../../Qzone/Qzone";
import SocialButtons from "../../SocialButtons/SocialButtons";

const RightAside = () => {
  return (
    <div className="space-y-10">
      <SocialLogin></SocialLogin>
      <SocialButtons></SocialButtons>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
