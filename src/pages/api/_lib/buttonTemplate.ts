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
   width="${(props.content.length * 10) + 50}"
   height="40"
   viewBox="0 0 ${(props.content.length * 10) + 50} 40"
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
               href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YiBpY29uPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+"
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
