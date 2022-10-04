import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";

const Redirec = () => {
  const { urlId } = useParams();
  const [loading, setLoading] = useState(true);

  const getLink = () => {
    axios
      .get(`ly/${urlId}`)
      .then(function (response) {
        const redirectLink = response.data.data.uri;
        setLoading(null);
        window.location = redirectLink;
      })
      .catch(function (error) {
        if (error) {
          toast.error("Une error a été rencontrée");
        }
      });

    //
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div>
      {loading === true ? (
        <div className="load">
          <PacmanLoader color="white" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Redirec;
