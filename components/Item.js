import React from "react";
import colors from "../data/colors.json";
import courses from "../data/courses.json";
import { Draggable } from "react-beautiful-dnd";

export default class Item extends React.Component {
  render() {
    const color = colors[this.props.number.split(" ")[0]];
    return (
      <Draggable draggableId={this.props.number} index={this.props.index}>
        {(provided) => (
          <div
            className="item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <span
              className="del"
              onClick={() => this.props.removeCourse(this.props.number)}
            >
              ✕
            </span>
            <div>
              <p className="number">{this.props.number}</p>
              <p className="title">
                {this.props.title.substring(0, 50) +
                  (this.props.title.length >= 50 ? "..." : "")}
              </p>
            </div>
            <style jsx>{`
              .item {
                border-radius: 2px;
                padding: 8px;
                margin: 0 8px 8px 0;
                background: white;
                max-width: 200px;
                height: auto;
                box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                  0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
                display: flex;
                align-items: start;
              }
              p {
                font-size: 1rem;
                line-height: 1.5;
              }
              .del {
                margin: 4px 7px 3px 2px;
                font-size: 12px;
                color: white;
                background: rgba(0, 0, 0, 0.4);
                display: inline-block;
                padding: 2px 4px;
                border-radius: 40px;
              }
              .number {
                font-weight: bold;
                font-size: 1.1rem;
              }
            `}</style>
          </div>
        )}
      </Draggable>
    );
  }
}
