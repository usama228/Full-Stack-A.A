"use client";
import ProjectCard1 from "../card/ProjectCard1";
import ListingOption2 from "../element/ListingOption2";
import ListingSidebar2 from "../sidebar/ListingSidebar2";
import Pagination1 from "./Pagination1";
import ListingSidebarModal2 from "../modal/ListingSidebarModal2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "@/redux/action";
import { PAGE_LIMIT } from "../../../config";
import { capitalizeFirstLetter, Loader } from "@/assets";
import { useQuery } from "@/authentication/ProvideAuth";
import Breadcumb from "@/components/breadcumb/Breadcumb";

export default function Listing8(props) {
  const { type } = props
  
  let query = useQuery();
 
  const [name, setName] = useState(query.get("name") || null);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState( query.get("state")||null);
  const [city, setCity] = useState( query.get("city")||null);
  const [area, setArea] = useState(null);
  const [page, setPage] = useState(1);
  const [radius, setRadius] = useState(null);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null
  })
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ latitude: null, longitude: null, error: error.message });
        }
      );
    } else {
      setLocation({ latitude: null, longitude: null, error: 'Geolocation not supported' });
    }
    dispatch(GetAllUsers({
      name: name,
      country: country,
      state: state,
      city: city,
      area: area,
      type: type,
      status: "active",
      radius: radius,
      page: page,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const clickOnPage = (pageNumber) => {
    setPage(pageNumber)
    dispatch(GetAllUsers({
      name: name,
      country: country,
      state: state,
      city: city,
      area: area,
      type: type,
      status: "active",
      radius: radius,
      page: pageNumber,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    }))
  }
  const filterData = (data) => {
    dispatch(GetAllUsers(data))
  }
  const setChangeInSearch = (value) => {
    setName(value);

  }
  const callAfterChange = () => {
    dispatch(GetAllUsers({
      name: name,
      country: country,
      state: state,
      city: city,
      area: area,
      type: type,
      status: "active",
      radius: radius,
      page: 1,
      limit: PAGE_LIMIT,
      userLatitude: location.latitude,
      userLongitude: location.longitude
    }))
  }
  return (
    <>
      <Breadcumb
        {...props}
        name={name}
        onChange={setChangeInSearch}
        onClick={callAfterChange}
      />
      <section className="pt30 pb90">
        <div className="container">
          {
            user.getAllUserLoading === true
            &&
            <Loader />
          }


          <div className="row">
            <div className="col-lg-3">
              <ListingSidebar2
                {...props}
                page={page}
                setPage={setPage}
                country={country}
                setCountry={setCountry}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
                area={area}
                setArea={setArea}
                name={name}
                radius={radius}
                setRadius={setRadius}
                setName={setName}
                location={location}
                setLocation={setLocation}
                filterData={filterData} />
            </div>
            {
              user.getAllUserSuccess === true
              &&
              <div className="col-lg-9">
                <ListingOption2
                  listName={`${capitalizeFirstLetter(type)}s`}
                  itemLength={user.getAllUsers.users?.length} />
                {
                  (user.getAllUsers.users || []).length > 0
                    ?
                    <div className="row">
                      {
                        (user.getAllUsers.users || []).map((item, i) => {
                          return (
                            <div key={i} className="col-md-6 col-lg-12">
                              <ProjectCard1 data={item} />
                            </div>
                          )
                        })

                      }

                    </div>
                    :
                    <div>
                      No {capitalizeFirstLetter(type)} Avaliable
                    </div>
                }
                {
                  (user.getAllUsers.users || []).length > 0
                  &&
                  user.getAllUsers
                  &&
                  user.getAllUsers?.totalPages
                  &&
                  <div className="mt30">
                    <Pagination1
                      clickOnPage={clickOnPage}
                      page={page}
                      totalItems={user.getAllUsers?.totalCount}
                      itemsPerPage={PAGE_LIMIT}
                      currentPage={page}
                      setPage={setPage} />
                  </div>
                }

              </div>
            }
          </div>

        </div>
      </section>
      <ListingSidebarModal2 />
    </>
  );
}
