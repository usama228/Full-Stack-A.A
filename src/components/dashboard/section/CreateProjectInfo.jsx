"use client";
import DashboardNavigation from "../header/DashboardNavigation";
import BasicInformation2 from "./BasicInformation2";
import UploadAttachment from "./UploadAttachment";

export default function CreateProjectInfo() {
  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-9">
            <div className="dashboard_title_area">
              <h2>Products</h2>
            </div>
          </div>
         
        </div>
        <div className="row">
          <div className="col-xl-12">
            <BasicInformation2 />
           
          </div>
        </div>
      </div>
    </>
  );
}
