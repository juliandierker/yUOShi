import React, { createContext, useCallback, useContext, useEffect, useState } from "react"
import PromisifiedMeteor from "../../api/promisified"

const SolutionContext = createContext(null);
export const useSolutionContext = () => {
  const ctx = useContext(SolutionContext);

  if (ctx === null) {
    throw new Error("No SolutionContextProvider available.");
  }

  return ctx;
}

export const SolutionContextProvider = ({ children }) => {
  // flag to indicate that the user has pressed the "AUSWERTEN" Button. 
  // used to trigger an effect of the current task to prepare the solution
  const { prepareSolution, setPrepareSolution } = useState(false)
  // solution, taskType, taskId are set by the task to prepare the context for the solveTask operation
  const { solution, setSolution } = useState(null)
  const { taskType, setTaskType } = useState("")
  const { taskId, setTaskId } = useState(-1)
  // set by the solveTask operation. should trigger an effect of the current task to show wether the solution was correct or not
  const { returnValue, setReturnValue } = useState(null)
  // flag to indicate that the solve operation is over and the solutionContext can be cleaned up now
  const { cleanUp, setCleanUp } = useState(false)


  // solveTask
  useEffect(async () => {
    // check if all data is set for the solveTask action
    if (solution == null) return
    if (taskType === "") return
    if (taskId === -1) return

    //TODO: open correct meteor call for each task
    let meteorCall = ""
    switch taskType {
      case "cloze":
        meteorCall = "tasks.checkCloze"
        break;
      default:
        break;
    }
    // check if a correct taskType was given
    if (meteorCall === "") return

    // call meteor function
    setReturnValue(await PromisifiedMeteor.call(
      meteorCall,
      taskId,
      solution
    ));

  }, [solution, taskType, taskId])

  // cleanUp
  useEffect(() => {
    if (cleanUp === false) return
    // set everything to default again
    setReturnValue(null)
    setTaskId(-1)
    setTaskType("")
    setSolution(null)
    setPrepareSolution(false)
    setCleanUp(false)
  }, [cleanUp])

  const ctx = {
    setPrepareSolution,
    prepareSolution,
    setSolution,
    setTaskType,
    setTaskId,
    returnValue,
    setCleanUp
  }

  return <SolutionContext.Provider value={ctx}>{children}</SolutionContext.Provider>
}