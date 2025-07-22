"use client";
import Pagination1 from "./Pagination1";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllCategories } from "@/redux/action";
import { PAGE_LIMIT } from "../../../config";
import Accordion from 'react-bootstrap/Accordion';
import Image from "next/image";
import Link from "next/link";
import { Loader } from "@/assets";
import { StickyContainer } from "react-sticky";
export default function Listing1() {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const category = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(GetAllCategories({
      limilt: PAGE_LIMIT,
      page: 1
    }))
  }, [dispatch])
  const clickOnPage = (pageNumber) => {
    setPage(pageNumber)
    dispatch(GetAllCategories({
      page: pageNumber,
      limit: PAGE_LIMIT,
    }))
  }


  return (
    <>
      <section className="pt30 pb90">
        <div className="container">
          {
            category.getAllCategoriesLoading === true
            &&
            <Loader />
          }
          {
            category.getAllCategoriesSuccess === true
            &&
            <div>
              <div className="row">
                {(category.getAllCategories.category || []).map((item, i) => {
                  return (
                    <div key={i} className="col-sm-6 col-xl-3">
                      <div
                        className={`listing-style1`}
                      >
                        <div className="list-thumb">
                          <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid">
                            <div className="item">
                              <Image
                                height={247}
                                width={331}
                                className="w-100 object-fit-cover"
                                src={item.avatar}
                                alt="thumbnail"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={`list-content `}>
                          <h5 className="list-title">
                            <Link href={`/category/${item.id}`}>{item.name}</Link>
                          </h5>
                          <p className="list-text body-color fz14 mb-1">{item.description}</p>
                          <hr className="my-2" />
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey={i}>
                              <Accordion.Header>
                                {`${item.name} Sub Categories`}
                              </Accordion.Header>
                              <Accordion.Body>
                                {
                                  (item.children || []).length <= 0
                                  &&
                                  <p className="list-text body-color fz14 mb-1">
                                    {"No Sub-Category Exist"}
                                  </p>
                                }
                                {
                                  (item.children || []).map((child, index) => {
                                    return (
                                      <div key={index}
                                        className={`listing-style1`}
                                      >

                                        <div className={`list-content `}>
                                          <h5 className="list-title">
                                            <Link href={`/category/${child.id}`}>{child.name}</Link>
                                          </h5>
                                          {/* <p className="list-text body-color fz14 mb-1">{child.description}</p> */}


                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </Accordion.Body>
                            </Accordion.Item>

                          </Accordion>
                        </div>
                      </div>


                    </div>
                  )
                })}
              </div>
              {
                (category.getAllCategories.category || []).length > 0
                &&
                category.getAllCategories
                &&
                category.getAllCategories?.totalPages
                &&
                <div className="mt30">
                  <Pagination1
                    clickOnPage={clickOnPage}
                    page={page}
                    totalItems={category.getAllCategories?.totalCount}
                    itemsPerPage={PAGE_LIMIT}
                    currentPage={page}
                    setPage={setPage} />
                </div>
              }
            </div>
          }
        </div>
      </section>
    </>
  );
}


export const CategoryList = () => {
  const category = useSelector((state) => state.category)
  return (


    <StickyContainer>
      <section className="pt30">
        <div className="container">
          <div className="row wrap">
            <div className="col-lg-12">
              <div className="column">
                <div className="scrollbalance-inner">

                  <div className="service-about">
                    <h4>Description</h4>
                    <p className="text mb30">
                      {category.category.description}
                    </p>

                    <hr className="opacity-100 mb60 mt60" />
                    <h4 className="mb30">{
                      category.category.parent_id ? 'Parent Category' : 'Sub Categories'
                    }
                    </h4>
                    <div className="row">
                      {
                        category.category.parent_id ?
                          <div className="col-6 col-lg-3">
                            <div className="project-attach">
                              <h6 className="title">
                                {category.category.parent.name}
                              </h6>
                              <span className="icon flaticon-page" />
                            </div>
                          </div>
                          :
                          <>
                            {
                              (category.category.children || []).length > 0
                                ?
                                <>
                                  {
                                    (category.category.children || []).map((cat, index) => {
                                      return (
                                        <div key={index} className="col-6 col-lg-3">
                                          <div className="project-attach">
                                            <h6 className="title">{cat.name}</h6>
                                            {/* <p>{cat.description}</p> */}
                                            <span className="icon flaticon-page" />
                                          </div>
                                        </div>
                                      )
                                    })

                                  }
                                </>
                                :
                                <p>No Sub Category</p>
                            }

                          </>
                      }


                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </StickyContainer>

  )
}