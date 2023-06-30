const render = ()=>{
   App(
      div(
          h1('Hello World',{class:'text-primary'})+
          a('Home',{href:'./index.html',class:'text-warning',})
      ,{class:'container'})
   ).root('App');
   
}

export const title = 'wDatJS | App';
export default render;