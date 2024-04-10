import { Section, calcProgress } from './CourseCalc.modules.js';

const arrList = {
	1: new Section(1, '00:40:00', 'Getting Started'),
	2: new Section(2, '01:55:00', 'The Basics'),
	3: new Section(3, '01:04:00', 'Course Project - The Basics'),
	4: new Section(4, '00:10:00', 'Debugging'),
	5: new Section(5, '01:25:00', 'Components and Data Binding Deep Dive'),
	6: new Section(6, '00:31:00', 'Course Project - Components and Data Binding'),
	7: new Section(7, '00:47:00', 'Directives Deep Dive'),
	8: new Section(8, '00:07:00', 'Course Project - Directives'),
	9: new Section(9, '00:45:00', 'Using Services & Dependency Injection'),
	10: new Section(10, '00:31:00', 'Course Project - Services & Dependency Injection'),
	11: new Section(11, '02:18:00', 'Changing Pages with Routing'),
	12: new Section(12, '00:46:00', 'Course Project - Routing'),
	13: new Section(13, '00:45:00', 'Understanding Observables'),
	14: new Section(14, '00:06:00', 'Course Project - Observables'),
	15: new Section(15, '02:03:00', 'Handling Forms in Angular Apps'),
	16: new Section(16, '01:15:00', 'Course Project - Forms'),
	17: new Section(17, '00:37:00', 'Using Pipes to Transform Output'),
	18: new Section(18, '01:41:00', 'Making Http Requests'),
	19: new Section(19, '00:34:00', 'Course Project - Http'),
	20: new Section(20, '02:12:00', 'Authentication and Route Protection in Angular'),
	21: new Section(21, '00:39:00', 'Dynamic Components'),
	22: new Section(22, '01:28:00', 'Angular Modules & Optimizing Angular Apps'),
	23: new Section(23, '00:18:00', 'Deploying an Angular App'),
	24: new Section(24, '00:46:00', 'Standalone Components'),
	25: new Section(25, '00:28:00', 'Angular Signals'),
	26: new Section(26, '06:30:00', 'Using NgRx For State Management'),
	27: new Section(27, '00:29:00', 'Angular Universal'),
	28: new Section(28, '00:39:00', 'Angular Animations'),
	29: new Section(29, '00:27:00', 'Adding Offline Capabilities with Service Workers'),
	30: new Section(30, '00:45:00', 'A Basic Introduction to Unit Testing in Angular Apps'),
	31: new Section(31, '01:07:00', 'Angular as a Platform & Closer Look at the CLI'),
	32: new Section(32, '00:16:00', 'Angular Changes & New Features'),
	33: new Section(33, '00:01:00', 'Course Roundup'),
	34: new Section(34, '01:01:00', 'TypeScript Introduction'),
};

const progress = calcProgress(arrList, 5, 6);
console.info('Udemy Angular');
console.table(progress);
