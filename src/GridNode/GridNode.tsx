import React from "react";
import "./GridNode.css";
import { node } from "../helperFunctions/usefulInterfaces";
import { ReactComponent as ChevronRightIcon } from "../icon/right-thin-chevron-svgrepo-com.svg";

interface Props {
  numberOfElementsPerRow: number;
  node: node;
  neighbors: [[number, number], number][];
  mouseState: boolean;
  handleMouseDown: (x: number, y: number) => void;
  handleMouseEnter: (x: number, y: number) => void;
}

const getAddedClassName: (
  neighbors: [[number, number], number][],
  node: node
) => string = (neighbors, node) => {
  let addedClassName: string = "";
  for (let i = 0; i < neighbors.length; i++) {
    let neighbor: [[number, number], number] = neighbors[i];
    let neighborX = neighbor[0][0],
      neighborY = neighbor[0][1],
      distance: number = neighbor[1];
    if (neighborX === node.x + 1)
      addedClassName += distance === 1 ? " no-wall-bottom" : " mud-bottom";
    if (neighborX === node.x - 1)
      addedClassName += distance === 1 ? " no-wall-top" : " mud-top";
    if (neighborY === node.y + 1)
      addedClassName += distance === 1 ? " no-wall-right" : " mud-right";
    if (neighborY === node.y - 1)
      addedClassName += distance === 1 ? " no-wall-left" : " mud-left";
  }
  if (node.hasCheese) addedClassName += " cheese";
  if (node.isShortestPath) addedClassName += " shortest-path-node";
  if (node.isVisited) addedClassName += " visited-node";
  return addedClassName;
};

// This component represents a single Node in the grid rendered in the DOM
export const _GridNode: React.FC<Props> = ({
  numberOfElementsPerRow,
  node,
  neighbors,
  mouseState,
  handleMouseDown,
  handleMouseEnter,
}) => {
  return (
    <div
      className={"grid-node" + getAddedClassName(neighbors, node)}
      onMouseDown={(e) => handleMouseDown(node.x, node.y)}
      onMouseEnter={(e) => handleMouseEnter(node.x, node.y)}
    >
      <span
        role="img"
        className={node.isStart || node.hasCheese ? "content" : ""}
      >
        {(node.isStart ? "🐀" : "") + (node.hasCheese ? "🧀" : "")}
      </span>
      <div className={"svg-chevron " + node.successorPosition}>
        {node.isShortestPath && !(node.isStart || node.hasCheese) ? (
          <ChevronRightIcon />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

const areEqual: (prevProps: Props, nextProps: Props) => boolean = (
  prevProps,
  nextProps
) => {
  return (
    prevProps.node.isVisited === nextProps.node.isVisited &&
    prevProps.node.isShortestPath === nextProps.node.isShortestPath &&
    getAddedClassName(prevProps.neighbors, prevProps.node) ===
      getAddedClassName(nextProps.neighbors, nextProps.node) &&
    prevProps.node === nextProps.node &&
    prevProps.mouseState === nextProps.mouseState
  );
};

export const GridNode = React.memo(_GridNode, areEqual);
