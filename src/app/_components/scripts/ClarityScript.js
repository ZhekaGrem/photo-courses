import Script from 'next/script';
const clarity = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function ClarityScript() {
  return (
    <Script id="microsoft-clarity" type="text/javascript" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script","o6l61eo24r");
      `}
    </Script>
  );
}
