import{i as b,r as o,s as c,x as d,t as p}from"../custom-element.es.js";const t={primary:"#6200EE",primaryVariant:"#3700B3",onPrimary:"#FFFFFF",default:"#FFFFFF",defaultVariant:"#EEEEEE",onDefault:"#000000"};var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor;let i=class extends c{render(){return d`
      <button>Click me</button>
    `}};i.styles=b`
    :host(.primary) {
      /* primary 테마 스타일 */
      --button-bg-color: ${o(t.primary)};
      --button-color: ${o(t.onPrimary)};
      --hover: ${o(t.primaryVariant)};
    }
    :host(.default) {
      /* default 테마 스타일 */
      --button-bg-color: ${o(t.default)};
      --button-color: ${o(t.onDefault)};
      --hover: ${o(t.defaultVariant)};
    }
    button {
      background-color: var(--button-bg-color);
      color: var(--button-color);
      padding: 8px 16px;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--hover);
    }
  `,i=((s,a,n,e)=>{for(var u,r=e>1?void 0:e?y(a,n):a,l=s.length-1;l>=0;l--)(u=s[l])&&(r=(e?u(a,n,r):u(r))||r);return e&&r&&m(a,n,r),r})([p("design-system")],i);
