import React from "react";
import { v4 } from "uuid";

export class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasksList: [],
            taskNames: [],
            taskNameInput: "",
        }
        this.sourceElement = "";
        this.taskNameChange = this.taskNameChange.bind(this)
        this.dealWithInput = this.dealWithInput.bind(this)
        this.dragStart = this.dragStart.bind(this)
        this.dragOver = this.dragOver.bind(this)
        this.dragLeave = this.dragLeave.bind(this)
        this.onDrop = this.onDrop.bind(this)
    }

    taskNameChange(event) {
        this.setState((state) => {
            return {
                taskNameInput: event.target.value,
            }
        })

        return
    }

    dragStart(event) {
        event.preventDefault();
        this.sourceElement = event.target;
        console.log(event.target.innerText)

        return
    }

    dragOver(event) {
        event.preventDefault();
        event.target.style.border = "1px solid red"

        return
    }

    dragLeave(event) {
        event.preventDefault();
        event.target.style.border = ""

        return
    }

    onDrop(event) {
        event.preventDefault()

        event.target.style.border = ""
        let sourceIndexPosition = this.state.taskNames.indexOf(this.sourceElement.innerText)
        let destinationIndex = this.state.taskNames.indexOf(event.target.innerText)

        // Moves the task from source position to destination position (tasksList).
        let modifiedTaskPositions = this.state.tasksList.slice()
        let valueToBeMoved = modifiedTaskPositions.splice(sourceIndexPosition, 1)[0]
        modifiedTaskPositions.splice(destinationIndex, 0, valueToBeMoved)

        // Moves the task name from the source posiiton to the destination position (taskNames).
        let modifiedNamesPositions = this.state.taskNames.slice()
        valueToBeMoved = modifiedNamesPositions.splice(sourceIndexPosition, 1)[0]
        modifiedNamesPositions.splice(destinationIndex, 0, valueToBeMoved)

        this.setState((state) => {
            return {
                tasksList: modifiedTaskPositions,
                taskNames: modifiedNamesPositions,
            }
        })

        return
    }

    dealWithInput(event) {
        event.preventDefault()
        this.setState((state) => {
            let newTasksList = this.state.tasksList
            let newTaskNames = this.state.taskNames
            newTasksList.push(<Task taskName={this.state.taskNameInput} dragStart={this.dragStart} onDrop={this.onDrop} dragOver={this.dragOver} dragLeave={this.dragLeave} />)
            newTaskNames.push(this.state.taskNameInput)
            return {
                tasksList: newTasksList,
                taskNames: newTaskNames,
                taskNameInput: "",
            }
        })

        return
    }

    render() {
        let theme_mode = localStorage.getItem("theme_mode")
        
        return (
            <div className={"task_data_section " + theme_mode}>
                <form onSubmit={this.dealWithInput}>
                    <input name="new_task_name" className={theme_mode} value={this.state.taskNameInput} onChange={this.taskNameChange} placeholder="Create a new todo..." />
                </form>
                <div className={"task_list " + theme_mode}>
                    {this.state.tasksList}
                </div> 
            </div>
        )
    }

}

export class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: false,
            taskID: v4(),
            delete: false,
        }
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    toggleCompleted() {
        this.setState((state) => {
            return {
                completed: (this.state.completed === false ? true: false)
            }
        })
    }

    removeTask() {
        this.setState((state) => {
            return {
                delete: true,
            }
        })
    }

    render() {
        let theme_mode = localStorage.getItem("theme_mode")
        return this.state.delete === true ? "": (
            <div className={"task " + theme_mode} id={this.state.taskID} data-completed={this.state.completed} draggable="true" onDrag={this.props.dragStart} onDrop={this.props.onDrop} onDragOver={this.props.dragOver} onDragLeave={this.props.dragLeave}>
                <div className={"task_content_container " + theme_mode}>
                    <button className={"toggle_task_completed " + theme_mode} onClick={this.toggleCompleted}></button>
                    <span className={"task_name " + theme_mode} onClick={this.toggleCompleted}>{this.props.taskName}</span>
                </div>
                <div className={"delete_task_container " + theme_mode}>
                    <img src="./images/icon-cross.svg" alt="Delete Task" className={"delete_task_image " + theme_mode} onClick={this.removeTask} />
                </div>
            </div>
        )
    }
}