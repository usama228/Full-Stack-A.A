"use client";
import { useAuth } from "@/authentication/ProvideAuth";
import { dasboardNavigation } from "@/data/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const path = usePathname();
  const auth = useAuth();
  return (
    <>
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">

          {dasboardNavigation.slice(0, 8).map((item, i) => {
            if (item.type.includes(auth.type)) {
              return (
                (
                  <div key={i} className="sidebar_list_item mb-1">
                    <Link
                      href={item.path}
                      className={`items-center ${path === item.path ? "-is-active" : ""
                        }`}
                    >
                      <i className={`${item.icon} mr15`} />
                      {item.name}
                    </Link>
                  </div>
                )
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    </>
  );
}
