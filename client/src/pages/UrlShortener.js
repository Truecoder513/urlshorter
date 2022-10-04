import axios from "axios";
import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

const UrlShortener = (props) => {
  let host = "";
  process.env.NODE_ENV === "production"
    ? (host = "https://dminish.heroku.app/")
    : (host = "http://localhost:3000/");
  const [done, setDone] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("Copie faite");
  };
  const postLink = () => {
    setLoading(true);
    if (url === "") {
      toast.error("Champ vide. Veuillez entrez un lien");
      setLoading(false);
      return;
    } else {
      axios
        .post(`short`, {
          uri: url,
        })
        .then(function (response) {
          console.log(response);
          setShortUrl(host + response.data.data.uuid);
          setDone(true);
          setLoading(false);
        })
        .catch(function (error) {
          setDone(true);
          setLoading(false);
          if (error.response.status === 400) {
            toast.error("Entrez un lien svp");
          } else if (error.response.status === 500) {
            toast.error("Une erreur a été rencontrée");
          } else {
            toast.error("Vérifier votre connexion et réessayer");
          }
        });
    }
  };
  return (
    <div className="app">
      <ToastContainer />
      {loading === true ? (
        <div className="load">
          <PacmanLoader color="white" />
        </div>
      ) : (
        ""
      )}
      <div className="theme">
        <img src={require("../img/tyr.jpg")} alt="" />
      </div>
      <div className="short">
        <h1>Url Diminisher</h1>
        <p className="desc">
          Un lien court est un puissant outil de marketing lorsque vous
          l'utilisez avec précaution. Ce n'est pas seulement un lien mais un
          intermédiaire entre votre client et sa destination. Un lien court vous
          permet de collecter autant de données sur vos clients et leurs
          comportements.
        </p>
        <p className="text">
          Créer facilement des liens cours gratuitement ici et sans publicité
        </p>
        <div className="field">
          <input
            type="text"
            placeholder="Coller un lien long"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="reduce" onClick={() => postLink()}>
            <b>Réduire</b>
          </button>
          {done && shortUrl !== "" && (
            <div className="res">
              <p className="text">Voici votre lien court</p>
              <div className="linkShorted">
                <a href={shortUrl}>{shortUrl}</a>
                <button className="copy" onClick={copy}>
                  copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;
