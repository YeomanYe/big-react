import { FiberNode } from './fiber';

const suspenseHandlerStack: FiberNode[] = [];

export function getSuspenseHandler() {
	return suspenseHandlerStack[suspenseHandlerStack.length - 1];
}
// QUESTION suspense栈的用处是什么？
export function pushSuspenseHandler(handler: FiberNode) {
	suspenseHandlerStack.push(handler);
}

export function popSuspenseHandler() {
	suspenseHandlerStack.pop();
}
