interface Data {
   content: string;
   link: string;
   bgColor?: string;
   txtColor?: string;
   icon?: string;
}

export default function getButtonTemplate(props: Data) {
  return `
   <svg
   width="${(props.content.length * 9) + 50}"
   height="40"
   viewBox="0 0 ${(props.content.length * 9) + 50} 40"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   >
      <style>
         .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #fff;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
         }
         .icon { fill: #fff }
      </style>

      undefined
      <a target="_blank" xlink:href="${props.link}">
         <rect
            data-testid="card-bg"
            x="0.5"
            y="0.5"
            rx="6"
            height="100%"
            width="100%"
            fill="${props.bgColor}"
            stroke-opacity="1"
         />


         <g
            data-testid="card-title"
            transform="translate(15, 26)"
         >
            <g transform="translate(0, 0)">
               <image
               x="0"
               y="-13"
               width="16"
               height="16"
               fill="#fff"
               href="data:image/svg+xml;base64,${(props.icon)}"
               />
            </g>
            <g transform="translate(25, 0)">
               <text
               x="0"
               y="0"
               class="header"
               data-testid="header"
               >${props.content}</text>
            </g>
         </g>
      </a>
   </svg>
   `;
}
