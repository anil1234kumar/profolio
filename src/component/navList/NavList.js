import React, { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navlist.scss";

const navpaths = [
  {
    id: 1,
    title: "tree's",
    link: "/trees",
  },
  {
    id: 2,
    title: "Fishe's",
    link: "/fishes",
  },
  {
    id: 3,
    title: "Animal's",
    link: "/animal",
  },
  {
    id: 4,
    title: "Birds's",
    link: "/birds",
  },
  {
    id: 5,
    title: "tree's",
    link: "/trees",
  },
  {
    id: 6,
    title: "Fishe's",
    link: "/fishes",
  },
  {
    id: 7,
    title: "Animal's",
    link: "/animal",
  },
  {
    id: 8,
    title: "Birds's",
    link: "/birds",
  },
  {
    id: 9,
    title: "tree's",
    link: "/trees",
  },
  {
    id: 10,
    title: "Fishe's",
    link: "/fishes",
  },
  {
    id: 11,
    title: "Animal's",
    link: "/animal",
  },
  {
    id: 12,
    title: "Birds's",
    link: "/birds",
  },
  {
    id: 13,
    title: "tree's",
    link: "/trees",
  },
  {
    id: 14,
    title: "Fishe's",
    link: "/fishes",
  },
  {
    id: 15,
    title: "Animal's",
    link: "/animal",
  },
  {
    id: 16,
    title: "Birds's",
    link: "/birds",
  },
];
const navpathsList = navpaths.map((paths) => (
  <Link key={paths.id} to={paths.link}>
    {paths.title}
  </Link>
));

const NavList = () => {
  const [arrowDisable, setArrowDisable] = useState(true);
  const elementRef = useRef(null);
  const handleHorizontalscroll = (element, speed, distance, step) => {
    let scrollamount = 0;
    const slidetimer = setInterval(() => {
      element.scrollLeft += step;
      scrollamount += Math.abs(step);
      if (scrollamount >= distance) {
        clearInterval(slidetimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  console.log("elementRef", elementRef);
  return (
    <>
      <Container>
        <div className="nav-list-links">
          <Button
            onClick={() => {
              handleHorizontalscroll(elementRef.current, 25, 100, -10);
            }}
            disabled={arrowDisable}
          >
            dfsdfdsf
          </Button>
          <div ref={elementRef}>{navpathsList}</div>
          <Button
            onClick={() => {
              handleHorizontalscroll(elementRef.current, 25, 100, 10);
            }}
          >
            abc
          </Button>
        </div>
      </Container>
    </>
  );
};

export default NavList;
