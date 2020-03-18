import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Navigation} from "./component/navigation/navigation";
import {Headline} from "./component/headline/headline";
import {Search} from "./component/search/search";
import Axios from "axios";

function App() {
  const [selectedCurrencyKey, setSelectedCurrencyKey] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const {t, i18n} = useTranslation();

  let props = null;

  if (i18n.isInitialized) {
    props = {
      headline: {
        logoSrc: "/Trivago.png",
        label: {
          pitch: t("headline.pitch"),
          try: t("headline.try"),
          logoAlt: t("headline.logoAlt")
        }
      },
      navigation: {
        availableLanguages: ["FR", "EN", "DE", "IT"],
        selectedCurrencyKey: selectedCurrencyKey,
        setSelectedCurrencyKey: setSelectedCurrencyKey,
        currencies: currencies,
        language: i18n.language,
        setLanguage: (language) => i18n.changeLanguage(language),
        label: {
          connection: t("navigation.connectLabel"),
          menu: t("navigation.menu.label"),
          recentlyConsulted: t("navigation.menu.item.recentlyConsulted"),
          previewReservation: t("navigation.menu.item.previewReservation"),
          paymentMethod: t("navigation.menu.item.paymentMethod")
        }
      }
    }
  }

  useEffect(() => {
    Axios.get("/data.json").then(res => setCurrencies(Object.keys(res.data)));
  }, []);

  useEffect(() => {
    setSelectedCurrencyKey(currencies.indexOf(t("defaultCurrency")));
    document.title = t("title")
  }, [i18n.language, currencies]);

  if (props !== null) {
    return (
      <div>
        <Navigation {...props.navigation}/>
        <Headline {...props.headline}/>
        <Search/>
      </div>
    )
  }

  return <div><p>Loading</p></div>

}

export default App;
