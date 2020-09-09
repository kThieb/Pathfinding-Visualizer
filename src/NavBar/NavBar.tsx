import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./NavBar.css";

export const NavBar: React.FC = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

interface NavButtonProps {
  text: string;
  isVisualized: number;
  className: string;
  startClassName?: string;
  visualizingClassName: string;
  visualizedClassName: string;
  handleClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const addedClassNames: string[] = [
    props.startClassName ? props.startClassName : "",
    props.visualizingClassName,
    props.visualizedClassName,
  ];

  return (
    <li
      className={
        "nav-item " +
        addedClassNames[props.isVisualized] +
        " " +
        props.className
      }
      onClick={(e) => {
        props.handleClick();
      }}
    >
      <p>{props.text}</p>
    </li>
  );
};

interface NavItemProps {
  text: string;
  id: string;
  isVisualized: number;
  shouldGreyOut: boolean;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick: (e: any) => void = (event) => {
    if (!props.shouldGreyOut || !props.isVisualized) setOpen(!open);
    document.addEventListener("click", (e) => {
      const dropDownMenu = document.getElementById(props.id);
      let targetElement = e.target as Element;

      do {
        if (targetElement === dropDownMenu) return;
        targetElement = targetElement.parentNode as Element;
      } while (targetElement);
      setOpen(false);
    });
  };

  return (
    <li
      id={props.id}
      className={
        "nav-item" +
        (props.shouldGreyOut && props.isVisualized ? " greyed-out" : "")
      }
    >
      <p className="icon-button" onClick={handleClick}>
        {props.text}
      </p>
      {open && props.children}
    </li>
  );
};

interface DropDownMenu {}

export const DropDownMenu: React.FC<DropDownMenu> = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  console.log(props.children);
  return <div className="dropdown">{props.children}</div>;
};

interface DropDownAlgoProps {
  leftIcon?: string;
  rightIcon?: string;
  algorithmName: string;
  changeAlgorithm: (algorithmName: string) => void;
}

export const DropDownAlgo: React.FC<DropDownAlgoProps> = (props) => {
  return (
    <div
      className="menu-item"
      onClick={(e) => {
        props.changeAlgorithm(props.algorithmName);
      }}
    >
      {props.children}
    </div>
  );
};

interface DropDownSliderProps {
  minValue: number;
  maxValue: number;
  defaultValue: number;
  text: string;
  handleChange: (event: any) => void;
}

export const DropDownSlider: React.FC<DropDownSliderProps> = (props) => {
  return (
    <div className="slider-item">
      <div>
        <p>{props.text}</p>
      </div>
      <input
        className="slider"
        type="range"
        value={props.defaultValue}
        min={props.minValue.toString()}
        max={props.maxValue.toString()}
        step={0.01}
        onChange={(e) => props.handleChange(e.target.value)}
      ></input>
    </div>
  );
};
