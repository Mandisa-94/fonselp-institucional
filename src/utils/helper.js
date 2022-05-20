export const scrollEffect = ( targetRef ) =>{
  targetRef.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}