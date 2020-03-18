import React from 'react';
import {useTranslation} from "react-i18next";
import {Navigation} from "./component/navigation/navigation";
import {Headline} from "./component/headline/headline";
import {Search} from "./component/search/search";

function App() {
  const {t, i18n} = useTranslation();

  let props = null;

  if (i18n.isInitialized) {
    props = {
      headline: {
        logo: {
          alt: t("headline.logoAlt"),
          src: "/Trivago.png",
        },
        pitch: t("headline.pitch"),
        try: t("headline.try")
      }
    }
  }

  if (props !== null) {
    return (
      <div>
        <Navigation/>
        <Headline {...props.headline}/>
        <Search/>
      </div>
    )
  }

  return <div><p>Loading</p></div>

}

export default App;
