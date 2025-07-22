import { PAGE_LIMIT } from "../../../config";
import ClearButton from "../button/ClearButton";
import LocationOption1 from "../option/LocationOption1";

export default function ListingSidebar2(props) {
  const { type, setCity, radius, setRadius, location, filterData, name, city, state, country, area, page, } = props

  const callOnClear = () => {
    setRadius(0)
    setCity(null)
    filterData({
      name: name,
      country: country,
      state: state,
      city: null,
      area: area,
      type: type,
      status: "active",
      radius: null,
      page: 1,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    })
  }
  return (
    <div className="list-sidebar-style1 d-none d-lg-block">
      <div >
        <div className="card mb20 pb5">
          <div className="scard-header">
            <h4>
              Location
            </h4>
          </div>
          <div>
            <div className="card-body card-body px-0 pt-0">
              <LocationOption1 {...props} />
            </div>
          </div>
        </div>

      </div>
      <ClearButton
        show={(radius || city)}
        clearFilters={callOnClear}
        {...props} />
    </div>
  );
}
