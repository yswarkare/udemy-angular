import { Section, calcProgress } from './CourseCalc.ts';

const arrList = {
	1: new Section(1, '00:31:00', 'Getting Started'),
	2: new Section(2, '04:47:00', 'Angular Essentials - Components, Templates, Services & More'),
	3: new Section(3, '00:39:00', 'Angular Essentials - Working with Modules'),
	4: new Section(4, '01:37:00', 'Angular Essentials - Time to Practice'),
	5: new Section(5, '00:16:00', 'Debugging Angular Apps'),
	6: new Section(6, '01:56:00', 'The Basics'),
	7: new Section(7, '01:05:00', 'Course Project - The Basics'),
	8: new Section(8, '00:10:00', 'Debugging'),
	9: new Section(9, '01:25:00', 'Components and Data Binding Deep Dive'),
	10: new Section(10, '00:31:00', 'Course Project - Components and Data Binding'),
	11: new Section(11, '00:47:00', 'Directives Deep Dive'),
	12: new Section(12, '00:07:00', 'Course Project - Directives'),
	13: new Section(13, '00:45:00', 'Using Services & Dependency Injection'),
	14: new Section(14, '00:31:00', 'Course Project - Services & Dependency Injection'),
	15: new Section(15, '02:18:00', 'Changing Pages with Routing'),
	16: new Section(16, '00:46:00', 'Course Project - Routing'),
	17: new Section(17, '00:45:00', 'Understanding Observables'),
	18: new Section(18, '00:06:00', 'Course Project - Observables'),
	19: new Section(19, '02:03:00', 'Handling Forms in Angular Apps'),
	20: new Section(20, '01:15:00', 'Course Project - Forms'),
	21: new Section(21, '00:37:00', 'Using Pipes to Transform Output'),
	22: new Section(22, '01:41:00', 'Making Http Requests'),
	23: new Section(23, '00:34:00', 'Course Project - Http'),
	24: new Section(24, '02:12:00', 'Authentication and Route Protection in Angular'),
	25: new Section(25, '00:39:00', 'Dynamic Components'),
	26: new Section(26, '01:28:00', 'Angular Modules & Optimizing Angular Apps'),
	27: new Section(27, '00:18:00', 'Deploying an Angular App'),
	28: new Section(28, '00:46:00', 'Standalone Components'),
	29: new Section(29, '00:28:00', 'Angular Signals'),
	30: new Section(30, '06:30:00', 'Using NgRx For State Management'),
	31: new Section(31, '00:29:00', 'Angular Universal'),
	32: new Section(32, '00:39:00', 'Angular Animations'),
	33: new Section(33, '00:27:00', 'Adding Offline Capabilities with Service Workers'),
	34: new Section(34, '00:45:00', 'A Basic Introduction to Unit Testing in Angular Apps'),
	35: new Section(35, '01:07:00', 'Angular as a Platform & Closer Look at the CLI'),
	36: new Section(36, '00:16:00', 'Angular Changes & New Features'),
	37: new Section(37, '00:01:00', 'Course Roundup'),
	38: new Section(38, '01:01:00', 'TypeScript Introduction'),
};

const success = { 1: '\u2705', 2: '\u2611' };
console.info(success[2], 'Udemy Angular');
const progress = calcProgress(arrList, 27, 27);
console.table(progress);
