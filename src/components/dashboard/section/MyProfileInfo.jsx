'use client'
import { useAuth } from "@/authentication/ProvideAuth";
import DashboardNavigation from "../header/DashboardNavigation";
import Award from "./Award";
import ChangePassword from "./ChangePassword";
import ConfirmPassword from "./ConfirmPassword";
import Education from "./Education";
import ProfileDetails from "./ProfileDetails";
import Skill from "./Skill";
import WorkExperience from "./WorkExperience";
import { capitalizeFirstLetter } from "@/assets";

export default function MyProfileInfo() {
  const auth = useAuth()
  return (
    <div className="dashboard__content hover-bgc-color">
      <div className="row pb40">
        <div className="col-lg-12">
          <DashboardNavigation />
        </div>
        <div className="col-lg-9">
          <div className="dashboard_title_area">
            <h2>{capitalizeFirstLetter(auth.type)} Profile</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ProfileDetails />
        </div>
      </div>
    </div>

  );
}
