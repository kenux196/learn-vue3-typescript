export function runSomeAction(afterRunner: Function) {
  console.log('into runSomeAction');
  setTimeout(() => {
    console.log('Action is Done');
    afterRunner();
  }, 1000);
}
