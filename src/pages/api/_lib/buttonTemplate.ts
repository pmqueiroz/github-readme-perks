interface Data {
   content: string;
   bgColor?: string;
   txtColor?: string;
   icon?: string;
}

export default function getButtonTemplate(content: string, bgColor: string) {
  return `
   <svg
   width="200"
   height="40"
   viewBox="0 0 200 40"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
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

      <rect
         data-testid="card-bg"
         x="0.5"
         y="0.5"
         rx="6"
         height="100%"
         width="100%"
         fill=${bgColor}
         stroke-opacity="1"
      />


      <g
         data-testid="card-title"
         transform="translate(25, 26)"
      >
         <g transform="translate(0, 0)">
            <svg
            class="icon"
            x="0"
            y="-13"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            >
            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
            </svg>
         </g>
         <g transform="translate(25, 0)">
            <text
            x="0"
            y="0"
            class="header"
            data-testid="header"
            >${content}</text>
         </g>
      </g>
   </svg>
   `;
}
