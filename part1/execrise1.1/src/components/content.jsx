import Part from "./part"

const Content = (props) => {
    return (
      <div>
        <Part part = {props.part1} exercises = {props.exercises1} />
        <Part part = {props.part1} exercises = {props.exercises1} />
        <Part part = {props.part1} exercises = {props.exercises1} />
      </div>
    )
  }

  export default Content