let DELIMITER = " · ";

function addStep(allSteps, newStep){
    if (!newStep) return allSteps;
    if (!allSteps || allSteps.length == 0) return newStep;

    let steps = allSteps.split(DELIMITER);
    let length = steps.length;
    let last = steps[length - 1];

    if (last.includes(newStep)) {
        let count = Number(last.replace(newStep+'x', ''));

        if (isNaN(count)){
             newStep = newStep + "x2"
         } else {
            newStep = newStep + 'x' + (++count);
         }

        steps[length - 1] = newStep;
    } else {
        steps[length] = newStep;
    }

    return steps.join(DELIMITER);
}

execution.setVariable('steps', addStep(steps, execution.activityId));