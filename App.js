const render = ()=>{
   App(
      div(
         h1("Hello World",{class:''})
         ,{class:'container'})
   ).root('App');
}

export const title = 'wDatJS | App';
export default render;
