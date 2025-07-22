"use client";
import toggleStore from "@/store/toggleStore";
import BudgetOption1 from "../option/BudgetOption1";
import DesignToolOption1 from "../option/DesignToolOption1";
import LocationOption1 from "../option/LocationOption1";
import SpeakOption1 from "../option/SpeakOption1";
import CategoryOption1 from "../option/CategoryOption1";
import ProjectTypeOption1 from "../option/ProjectTypeOption1";
import EnglishLevelOption1 from "../option/EnglishLevelOption1";
import ClearButton from "../button/ClearButton";

export default function ListingSidebarModal2() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);

  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1">
          <h4 className="list-title">All filters</h4>
          <div className="sidebar-close-icon" onClick={listingToggle}>
            <span className="far fa-times" />
          </div>
        </div>
        <div className="hsidebar-content">
          <div className="widget-wrapper">
            <div className="sidebar-accordion">
              <div className="accordion" id="accordionExample2">
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingTwos">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="true"
                        aria-controls="collapseTwos"
                      >
                        Location
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwos"
                    className="collapse show"
                    aria-labelledby="headingTwos"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <LocationOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb10">
                  <div className="card-header" id="headingZero">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseZero"
                        aria-expanded="false"
                        aria-controls="collapseZero"
                      >
                        Categories
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseZero"
                    className="collapse show"
                    aria-labelledby="headingZero"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <CategoryOption1 />
                      <a className="text-thm">+20 more</a>
                    </div>
                  </div>
                </div>
                
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingThrees">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThrees"
                        aria-expanded="true"
                        aria-controls="collapseThrees"
                      >
                        Alphabetic
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseThrees"
                    className="collapse show"
                    aria-labelledby="headingThrees"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <SpeakOption1 />
                    </div>
                  </div>
                </div>
                
              </div>
              <ClearButton />
            </div>
          </div>
        </div>
      </div>
      <div onClick={listingToggle} className="hiddenbar-body-ovelay" />
    </>
  );
}
