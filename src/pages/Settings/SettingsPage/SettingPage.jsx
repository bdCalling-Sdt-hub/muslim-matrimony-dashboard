import { LiaAngleLeftSolid } from "react-icons/lia";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChangePassword from "../../../components/Settings/ChangePassword/ChangePassword";
import LoginActivity from "../../../components/Settings/LoginActivity/LoginActivity";
import PrivacyPolicy from "../../../components/Settings/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "../../../components/Settings/AboutUs/AboutUs";
import VerifyOTP from "../../../components/Settings/VerifyOTP/VerifyOTP";
import UpdatePassword from "../../../components/Settings/UpdatePassword/UpdatePassword";
import Support from "../../../components/Settings/Support/Support";
import FAQ from "../../../components/Settings/FAQ/FAQ";
import TermsAndCondition from "../../../components/Settings/TermsCondition/TermsAndCondition";
import ChangeImage from "../../../components/Settings/ChangeImage/ChangeImage";
import BlockedUsers from "../../Dashboard/Users/BlockedUsers";
// import SubscriptionPackage from "../../../../components/Settings/SubscriptionPackage/SubscriptionPackage";
// import ChangePassword from "../../../components/Settings/ChangePassword/ChangePassword";
// import LoginActivity from "../../../components/Settings/LoginActivity/LoginActivity";
// import Trash from "../../../../components/Settings/Trash/Trash";
// import PrivacyPolicy from "../../../../components/Settings/PrivacyPolicy/PrivacyPolicy";
// import TermsAndCondition from "../../../../components/Settings/TermsAndCondition/TermsAndCondition";
// import AboutUs from "../../../../components/Settings/AboutUs/AboutUs";
// import VerifyOTP from "../../../../components/Settings/VerifyOTP/VerifyOTP";
// import UpdatePassword from "../../../../components/Settings/UpdatePassword/UpdatePassword";

const SettingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  //don't delete this it's a important for navigation(those are mandatory)
  const textSplit = params.dynamic.split("-");
  const text = textSplit.join(" ");
  return (
    <>
      <div className="mt-[24px] border-secondary border-[1px] h-[78vh] rounded-2xl ">
        <div className="p-[30px]">
          <h1
            onClick={() => navigate("/settings")}
            // font-['Montserrat']
            className="text-3xl flex items-center cursor-pointer font-semibold  text-siteColor border-b-[1px] border-siteColor pb-[30px]"
          >
            <LiaAngleLeftSolid fontSize={30} />
            {location.pathname === "/settings" && "Settings"}
            {location.pathname === "/settings/change-password" &&
              "Change Password"}
            {location.pathname === "/settings/subscription-package" &&
              "Subscription Package"}
            {location.pathname === "/settings/login-activity" &&
              "Login Activity"}
            {/* {location.pathname === "/settings/trash" && "Trash"} */}
            {location.pathname === "/settings/privacy-policy" &&
              "Privacy Policy"}
            {location.pathname === "/settings/terms-condition" &&
              "Terms and Condition"}
            {location.pathname === "/settings/support" && "Support"}
            {location.pathname === "/settings/terms" && "Terms of Services"}
            {location.pathname === "/settings/about-us" && "About Us"}
            {location.pathname === "/settings/verify-otp" && "Verify OTP"}
            {location.pathname === "/settings/update-password" &&
              "Update Password"}
            {location.pathname === "/settings/change-image" &&
              "Change Image"}
          </h1>
          <div>
            {text === "change password" && <ChangePassword />}
            {/* {text === "subscription package" && <SubscriptionPackage />} */}
            {text === "login activity" && <LoginActivity />}
            {/* {text === "trash" && <Trash />} */}
            {text === "privacy policy" && <PrivacyPolicy />}
            {text === "terms" && <TermsAndCondition />}
            {text === "support" && <Support />}
            {text === "faq" && <FAQ />}
            {text === "about us" && <AboutUs />}
            {
              text === "blocked users" && <BlockedUsers />
            }
            {location.pathname === "/settings/verify-otp" && <VerifyOTP />}
            {location.pathname === "/settings/update-password" && (
              <UpdatePassword />
            )}
            {location.pathname === "/settings/change-image" && (
              <ChangeImage />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
