const render = ()=>{
   App(
      div(
          h1('Hello World',{class:'text-primary'})
      ,{class:'container'})
   ).root('App');
   
}

export const title = 'wDatJS | App';
export default render;