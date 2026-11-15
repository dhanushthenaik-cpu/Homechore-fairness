# HomeChore Fairness – Project Report

## Abstract
HomeChore Fairness is a MERN-stack shared household chore planner. It helps housemates create chores, assign responsibilities, set due dates, record completion and review workload distribution.

## Problem Statement
Housemates may disagree about whether chores are distributed fairly or completed regularly. A shared chore rota with assignments, completion records and recurring schedules makes responsibilities visible.

## Objectives
- Organize household chores in one place.
- Assign tasks to housemates.
- Track due dates, priority and completion.
- Maintain completion history.
- Identify repeated workload imbalances.

## Technologies
React.js, Node.js, Express.js, MongoDB, Mongoose, Vite and CSS.

## Modules
1. Housemate management
2. Chore creation and assignment
3. Due date, priority and recurrence selection
4. Completion tracking and history
5. Dashboard statistics
6. Fairness analytics

## Differentiating Feature
Fairness analytics totals completed chore workload for each housemate in a selected period. Each chore has a workload weight. The system compares each person's workload to the household average and flags a significant imbalance. It is an indicator for discussion, not a definitive judgement.

## Methodology
The React UI communicates with Express REST API endpoints. Express validates input and stores data in MongoDB using Mongoose models. The frontend requests current chores, housemates and analytics.

## Advantages
Clear task ownership, visible completion history, shared planning and transparent workload distribution.

## Limitations
This classroom version does not include authentication, multiple household separation, notifications or automatic recurring-task generation. Fairness depends on correct completion records and workload weights.

## Future Enhancements
Authentication, multiple households, reminders, automatic recurring tasks, configurable fairness settings and downloadable reports.

## Conclusion
HomeChore Fairness provides a simple digital approach to shared household task planning and helps housemates discuss workload using recorded data.
