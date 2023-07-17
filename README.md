# bootcamp-day-scheduler

Project to dynamically update HTML with CCS powered by jQuery and the Day.js API.

## Sources

- https://day.js.org/docs - useful for figuring out what day.js wants and what is returns
- https://www.w3schools.com/jsref/jsref_split.asp - helped with removing the first part of the ID. Feels really messy to make the "hour-" the dividing character
- Phind.com - asked it question on how to slow down how often a loop is called. Gave me code back using the "setTimeout" global function.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
