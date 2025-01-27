import * as React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export type Link = {
  name: string;
  href?: string;
};

type BreadcrumbsProps = {
  links?: Link[];
};

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  React.useEffect(() => {}, []);
  return (
    <nav className="flex py-5" aria-label="Breadcrumb ">
      <ol role="list" className="flex items-center space-x-4 mb-4">
        {links?.map((link, idx) => (
          <li key={link.name}>
            <div className="flex items-center">
              {idx !== 0 && (
                <ChevronRightIcon className="h-4 w-4 flex-shrink-0  text-[#5da36e]"></ChevronRightIcon>
              )}
              {link.href ? (
                <a
                  href={`/${link.href}`}
                  className="ml-4 text-xs font-medium   hover:underline text-[#5da36e]"
                >
                  {link.name}
                </a>
              ) : (
                <span className="ml-4 text-xs font-medium  text-[#5da36e]">
                  {link.name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
