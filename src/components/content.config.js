const triggerList = [
  {
    id: 'whenACandidateMovedToThisStage',
    ImgId: 'eye.svg',
    title: 'New visitor',
    description: 'Triggers when somebody visits a specified page',
  },
  {
    id: 'whenAnInterviewIsScheduled',
    ImgId: 'action.svg',
    title: 'Action is performed',
    description: 'Triggers when somebody performs a specified action',
  },
  {
    id: 'whenAnInterviewIsCompleted',
    ImgId: 'time.svg',
    title: 'Time has passed',
    description: 'Triggers after a specified amount of time',
  },
  {
    id: 'whenAQuestionnaireIsSent',
    ImgId: 'error.svg',
    title: 'Error prompt',
    description: 'Triggers when a specified error happens',
  },
];

const Actions = [
  {
    id: 'whenAQuestionnaireIsSubmitted',
    ImgId: 'database.svg',
    title: 'New database entry',
    description: 'Adds a new entry to a specified database',
  },
  {
    id: 'whenAnEmailIsSent',
    ImgId: 'database.svg',
    title: 'Update database',
    description: 'Edits and deletes database entries and properties',
  },
  {
    id: 'whenAnEmailIsReceived',
    ImgId: 'action.svg',
    title: 'Perform an action',
    description: 'Performs or edits a specified action',
  },
  {
    id: 'whenAScorecardIsRequested',
    ImgId: 'twitter.svg',
    title: 'Make a tweet',
    description: 'Makes a tweet with a specified query',
  },
];

const Loggers = [
  {
    id: 'whenAScorecardIsSubmitted',
    ImgId: 'logred.svg',
    title: 'Add new log entry',
    description: 'Adds a new log entry to this project',
  },
  {
    id: 'thenAScorecardIsSubmitted',
    ImgId: 'logred.svg',
    title: 'Update logs',
    description: 'Edits and deletes log entries in this project',
  },
  {
    id: 'nowAScorecardIsSubmitted',
    ImgId: 'error.svg',
    title: 'Prompt an error',
    description: 'Triggers a specified error',
  },
];

export { triggerList, Actions, Loggers };
