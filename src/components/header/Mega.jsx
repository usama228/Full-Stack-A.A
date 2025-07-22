'use client'
import { GetAllCategories } from "@/redux/action";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Mega({ staticMenuClass }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(GetAllCategories({
      page: 1,
      limit: 100000000000
    }))
  }, [dispatch])
  
  return (
    <>
      <div id="mega-menu">
        <a
          className={`btn-mega fw500 ${staticMenuClass ? staticMenuClass : ""
            } `}
        >
          <span
            className={`pl30 pl10-xl pr5 fz15 vam flaticon-menu ${staticMenuClass ? staticMenuClass : ""
              } `}
          />
          Categories
        </a>
        <ul className="menu ps-0">
          {
            (category.getAllCategories.category || []).map((item, index) => {
              return (

                <li key={index}>
                  <a className="dropdown">
                    <span className={`menu-icn ${item.icon}`}>
                      <Image
                        height={45}
                        width={45}
                        className="rounded-circle wa-xs"
                        src={item.avatar}
                        style={{
                          height: "45px",
                          width: "45px",
                          objectFit: "cover",
                        }}
                        alt="profile"
                      />
                    </span>
                    <span className="menu-title">{item.name}</span>
                  </a>
                  <div className="drop-menu d-flex justify-content-between">
                    <ul className="ps-0 mb40">
                      {(item.children || []).map((subItem, subIndex) => {
                        return (
                          <li key={subIndex}>
                            <Link href={'/'}>{subItem.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
        </ul>
      </div >
    </>
  );
}
